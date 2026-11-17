#!/bin/sh
# SPDX-FileCopyrightText: 2026 austit.de
# SPDX-License-Identifier: AGPL-3.0-or-later
#
# Hintergrundaufgaben der lokalen Dev-Instanz: fuehrt cron.php jede Minute als Besitzer von
# config/config.php aus, wie occ in entrypoint.sh. Neue Dateien bleiben fuer Apache beschreibbar.
cd /var/www/html
umask 000

while true; do
	CONFIG_OWNER=$(stat -c '%u' config/config.php 2>/dev/null || echo 33)
	setpriv --reuid="$CONFIG_OWNER" --regid="$CONFIG_OWNER" --clear-groups php -f cron.php \
		|| echo "cron.php ist fehlgeschlagen" >&2
	sleep 60
done
