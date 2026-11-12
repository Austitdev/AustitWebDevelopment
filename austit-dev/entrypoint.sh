#!/bin/sh
# Startskript der lokalen Dev-Instanz: installiert Nextcloud beim ersten Start
# in die Dev-Datenbank und startet danach Apache.
set -e
cd /var/www/html

occ() {
	su www-data -s /bin/sh -c "php /var/www/html/occ $*"
}

chown www-data:www-data data custom_apps

if ! grep -q "'installed' => true" config/config.php 2>/dev/null; then
	occ maintenance:install \
		--database pgsql --database-host db \
		--database-name nextcloud --database-user nextcloud --database-pass nextcloud \
		--admin-user admin --admin-pass admin \
		--data-dir /var/www/html/data
	occ config:system:set trusted_domains 0 --value=localhost
	occ config:system:set overwrite.cli.url --value=http://localhost:8080
fi

php austit-dev/brand-l10n.php /var/www/html austit
occ app:disable nextcloud_announcements firstrunwizard survey_client || true
occ app:enable austit_updates
occ app:enable austit_shell

exec apache2-foreground
