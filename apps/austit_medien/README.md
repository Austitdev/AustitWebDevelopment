# austit Medien

YouTube (später auch ARD/ZDF/Arte-Mediatheken) läuft ausschließlich über die
eigene Cloud-Infrastruktur: Die Browser der Nutzer sprechen nur mit der Cloud,
YouTube sieht ausschließlich den Server. Zielgruppen sind Unternehmen, in denen
YouTube ausdrücklich gesperrt ist, sowie Schulen.

## Architektur

- **Download-Cache statt Live-Proxy**: Ein freigegebenes Video wird einmalig
  mit `yt-dlp` + `ffmpeg` als MP4 in den App-Data-Cache geladen (Hintergrund-
  Job, siehe `lib/Job/FetchJob.php`). Nutzer streamen danach aus der Cloud,
  inklusive HTTP-Range-Requests (`/api/stream/{videoId}`).
- **Suche live über den Server** über die YouTube-Innertube-API des Web-Clients
  (`lib/Core/TubeSearch.php`).
- **NC-freier Kern**: `lib/Core/` (TubeSearch, YtDlp, AccessRules) ist frei
  von Nextcloud-Abhängigkeiten und unit-testbar. Der dünne Adapter
  (`lib/Service/MediaService.php`) behandelt nur Konfiguration, Rechte und
  Cache im App-Data-Verzeichnis.
- **Zugriffsmodell**: Freigabeliste (Videos + Kanäle) als Standard; Suche
  können alle Nutzer, wahlbar nur für konfigurierte Gruppen (`searchGroups`,
  leer = alle).

## Voraussetzungen auf dem Server

- `yt-dlp` im PATH (`pip3 install --break-system-packages yt-dlp`)
- `ffmpeg` im PATH
- Python 3 ab 3.9
- Cron/Background-Job-Container läuft (Downloads laufen über QueuedJobs)

Für große Videos sollte `memory_limit` großzügig sein, da die Datei beim
Einlesen in den App-Data-Cache vollständig im Speicher liegt.

## Konfiguration

Über die App-Oberfläche (Administratoren):

- Maximale Auflösung (`maxHeight`, 144–2160)
- Gruppen, deren Mitglieder suchen dürfen (`searchGroups`, leer = alle)
- Freigegebene Kanäle (`channels`)
- Videos freigeben/entfernen (`videos`)

## Endpunkte

| Methode | Route | Zweck |
| --- | --- | --- |
| GET | `/apps/austit_medien/api/search?q=` | Live-Suche (alle, außer auf Gruppen eingeschränkt) |
| GET | `/apps/austit_medien/api/video/{id}` | Metadaten + Status |
| GET | `/apps/austit_medien/api/thumb/{id}` | Thumbnail |
| GET | `/apps/austit_medien/api/stream/{id}` | MP4-Stream inkl. Range-Requests |
| POST | `/apps/austit_medien/api/queue/{id}` | Download in die Warteschlange |
| POST/DELETE | `/apps/austit_medien/api/allow/{id}` | Freigeben/entfernen (Admin) |
| GET/PUT | `/apps/austit_medien/api/config` | Konfiguration (PUT nur Admin) |

## Mediatheken (Ausblick)

`yt-dlp` bringt Extractoren für ARD, ZDF und ARTE mit. Die Pipeline
(Queue → Download → Cache → Stream) funktioniert unverändert; `TubeSearch`
wird um einen Provider je Mediathek ergänzt.
