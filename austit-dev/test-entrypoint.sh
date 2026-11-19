#!/bin/sh
# SPDX-FileCopyrightText: 2026 austit.de
# SPDX-License-Identifier: AGPL-3.0-or-later

# Startskript der Test-Instanz: installiert die austit Cloud beim ersten Start
# in die MariaDB-Datenbank des Compose-Netzwerks und startet danach Apache -
# so wie im Produktivbetrieb. Admin-Zugang und vertraute Domain koennen ueber
# Umgebungsvariablen gesetzt werden:
#   AUSTIT_ADMIN_USER     (Standard: admin)
#   AUSTIT_ADMIN_PASS     (Standard: admin)
#   AUSTIT_TRUSTED_DOMAIN (Standard: localhost)
# Die Datenbank-Zugangsdaten muessen mit dem db-Service der Compose-Datei
# uebereinstimmen (Standard dort: nextcloud/nextcloud/nextcloud auf Host db).
set -e
cd /var/www/html

occ() {
	CONFIG_OWNER=$(stat -c '%u' config/config.php 2>/dev/null || echo 33)
	setpriv --reuid="$CONFIG_OWNER" --regid="$CONFIG_OWNER" --clear-groups \
		/bin/sh -c "php /var/www/html/occ $*"
}

ADMIN_USER="${AUSTIT_ADMIN_USER:-admin}"
ADMIN_PASS="${AUSTIT_ADMIN_PASS:-admin}"
TRUSTED_DOMAIN="${AUSTIT_TRUSTED_DOMAIN:-localhost}"
DB_HOST="${AUSTIT_DB_HOST:-db}"
DB_NAME="${AUSTIT_DB_NAME:-nextcloud}"
DB_USER="${AUSTIT_DB_USER:-nextcloud}"
DB_PASS="${AUSTIT_DB_PASS:-nextcloud}"

chown www-data:www-data data custom_apps
chmod -R a+rwX data
chown www-data:www-data config/config.php 2>/dev/null || true
chmod a+rw config/config.php 2>/dev/null || true

if ! grep -q "'installed' => true" config/config.php 2>/dev/null; then
	occ maintenance:install \
		--database mysql --database-host "$DB_HOST" \
		--database-name "$DB_NAME" --database-user "$DB_USER" \
		--database-pass "$DB_PASS" \
		--admin-user "$ADMIN_USER" --admin-pass "$ADMIN_PASS" \
		--data-dir /var/www/html/data
	occ config:system:set trusted_domains 0 --value="$TRUSTED_DOMAIN"
	occ config:system:set overwrite.cli.url --value="http://${TRUSTED_DOMAIN}:8081"
fi

# Hintergrundaufgaben laufen im cron-Service (docker-compose.test.yml);
# als Modus genuegt cron damit Talk den Nachrichtenauf/beiablauf anbietet.
occ background:cron

# Dateien im Browser oeffnen: Bilder/Videos, PDF, Text/Markdown und Office ueber Collabora.
occ app:enable viewer files_pdfviewer text photos
if [ ! -d custom_apps/richdocuments ]; then
	occ app:install richdocuments || echo "richdocuments konnte nicht installiert werden (keine Internetverbindung?)"
fi
if [ -d custom_apps/richdocuments ]; then
	occ app:enable richdocuments
	# Browser erreicht Collabora ueber localhost:9981, Nextcloud und Collabora sich gegenseitig im Docker-Netz.
	occ config:app:set richdocuments wopi_url --value=http://collabora:9980
	occ config:app:set richdocuments public_wopi_url --value=http://localhost:9981
	occ config:app:set richdocuments wopi_callback_url --value=http://app
	occ config:app:set richdocuments wopi_allowlist --value=172.16.0.0/12,192.168.0.0/16,10.0.0.0/8
	occ config:system:set trusted_domains 1 --value=app
	occ config:system:set allow_local_remote_servers --value=true --type=boolean
fi

php austit-dev/brand-l10n.php /var/www/html austit

# Erscheinungsbild wie auf cloud.austit.de: Name, Farben, Logo und Hintergrund.
if ! ls data/appdata_*/theming/global/images/logo >/dev/null 2>&1; then
	occ theming:config name "'austit Cloud'"
	occ theming:config slogan "'Deine Daten. Deine Cloud.'"
	occ theming:config url https://austit.de
	occ theming:config imprintUrl https://austit.de/impressum
	occ theming:config privacyUrl https://austit.de/datenschutz
	occ theming:config primary_color "'#2f8fd0'"
	occ theming:config disable-user-theming yes
	occ theming:config logo /var/www/html/themes/austit/core/img/logo.svg
	occ theming:config logoheader /var/www/html/themes/austit/core/img/logo-icon.svg
	occ theming:config background /var/www/html/austit-dev/theming/background.png
	occ theming:config background_color "'#0f1724'"
	occ theming:config favicon /var/www/html/austit-dev/theming/favicon.ico
fi

occ app:disable nextcloud_announcements firstrunwizard survey_client || true
occ app:enable austit_updates
occ app:enable austit_shell
occ app:enable austit_notebook
occ app:enable austit_talk
# austit_medien benoetigt yt-dlp + ffmpeg aus dem Image (siehe Dockerfile).
occ app:enable austit_medien

exec apache2-foreground
