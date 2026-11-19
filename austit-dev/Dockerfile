# SPDX-FileCopyrightText: 2026 austit.de
# SPDX-License-Identifier: AGPL-3.0-or-later

# Image der austit Cloud fuer Testsysteme.
#
# Das Basis-Image entspricht dem der lokalen Entwicklung (PHP, Apache,
# occ-Wrapper, entrypoint-Hooks). Der komplette Server-Fork wird ins
# Dokumentroot kopiert und ueberschreibt damit die Nextcloud-Dateien des
# Basis-Images, genau wie der Bind-Mount in der Dev-Umgebung.
#
# Build aus dem Wurzelverzeichnis des Repos:
#   docker build -f austit-dev/Dockerfile -t austit-cloud:test .
# Start (mit MariaDB und Cron):
#   docker compose -f austit-dev/docker-compose.test.yml up -d
# Aufruf: http://localhost:8081  (Login: admin / admin)

FROM nextcloud:35.0.2-apache

# Server-Fork inkl. austit-Apps, Theme und austit-dev-Hilfsdateien.
COPY . /var/www/html/

# Feste Cloud-Konfiguration (Updates nur fuer Standard-Apps, kein
# Web-Updater, App-Update-Blocklist fuer alle eigenentwickelten Apps).
COPY austit-dev/austit.config.php /var/www/html/config/austit.config.php

# PHP- und Apache-Einstellungen wie auf dem VPS.
COPY austit-dev/php-austit.ini /usr/local/etc/php/conf.d/zz-austit.ini
COPY austit-dev/apache-austit.conf /etc/apache2/conf-enabled/zz-austit.conf

# Installations-Start fuer das Testsystem (MariaDB, occ-Setup, Apps aktivieren).
COPY austit-dev/test-entrypoint.sh /usr/local/bin/austit-test-entrypoint.sh
RUN chmod +x /usr/local/bin/austit-test-entrypoint.sh \
	&& chmod -R a+rX /var/www/html

ENTRYPOINT ["/bin/sh", "/usr/local/bin/austit-test-entrypoint.sh"]
