#!/bin/sh
# Startskript der lokalen Dev-Instanz: installiert Nextcloud beim ersten Start
# in die Dev-Datenbank und startet danach Apache.
set -e
cd /var/www/html

occ() {
	CONFIG_OWNER=$(stat -c '%u' config/config.php 2>/dev/null || echo 33)
	setpriv --reuid="$CONFIG_OWNER" --regid="$CONFIG_OWNER" --clear-groups \
		/bin/sh -c "php /var/www/html/occ $*"
}

chown www-data:www-data data custom_apps
chmod -R a+rwX data
# occ und Cron laufen als Besitzer von config.php; www-data darf auch die Dateien von Apache aendern.
chown www-data:www-data config/config.php 2>/dev/null || true
chmod a+rw config/config.php 2>/dev/null || true

if ! grep -q "'installed' => true" config/config.php 2>/dev/null; then
	occ maintenance:install \
		--database pgsql --database-host db \
		--database-name nextcloud --database-user nextcloud --database-pass nextcloud \
		--admin-user admin --admin-pass admin \
		--data-dir /var/www/html/data
	occ config:system:set trusted_domains 0 --value=localhost
	occ config:system:set overwrite.cli.url --value=http://localhost:8080
fi

# Hintergrundaufgaben laufen ueber den cron-Container, sonst blendet Talk den Nachrichtenablauf aus.
occ background:cron

# Dateien im Browser oeffnen: Bilder/Videos, PDF, Text/Markdown und Office ueber Collabora.
occ app:enable viewer files_pdfviewer text photos
if [ ! -d custom_apps/richdocuments ]; then
	occ app:install richdocuments || echo "richdocuments konnte nicht installiert werden (keine Internetverbindung?)"
fi
if [ -d custom_apps/richdocuments ]; then
	occ app:enable richdocuments
	# Browser erreicht Collabora ueber localhost:9980, Nextcloud und Collabora sich gegenseitig im Docker-Netz.
	occ config:app:set richdocuments wopi_url --value=http://collabora:9980
	occ config:app:set richdocuments public_wopi_url --value=http://localhost:9980
	occ config:app:set richdocuments wopi_callback_url --value=http://app
	occ config:app:set richdocuments wopi_allowlist --value=172.16.0.0/12,192.168.0.0/16,10.0.0.0/8
	occ config:system:set trusted_domains 1 --value=app
	occ config:system:set allow_local_remote_servers --value=true --type=boolean
fi

php austit-dev/brand-l10n.php /var/www/html austit

# Erscheinungsbild wie auf cloud.austit.de: Name, Farben, Logo und Hintergrund der Theming-App.
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
	# Das Hochladen des Hintergrunds setzt die Hintergrundfarbe neu, daher erst danach festlegen.
	occ theming:config background_color "'#0f1724'"
	occ theming:config favicon /var/www/html/austit-dev/theming/favicon.ico
fi
occ app:disable nextcloud_announcements firstrunwizard survey_client || true
occ app:enable austit_updates
occ app:enable austit_shell
occ app:enable austit_notebook

exec apache2-foreground
