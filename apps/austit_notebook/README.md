<!--
 - SPDX-FileCopyrightText: 2026 austit.de
 - SPDX-License-Identifier: AGPL-3.0-or-later
-->
# austit Notizbuch

Digitale Notizbücher für die austit Cloud: Notizbücher, Abschnitte und Seiten, jede Seite eine
unbegrenzte Fläche für frei platzierten Text, Bilder und Handschrift.

## Aufbau

| Pfad | Inhalt |
|---|---|
| `appinfo/`, `lib/`, `templates/` | Nextcloud-App (PHP): Speicherung, API, Rechte |
| `src/` | Oberfläche (Vue 3, TipTap, perfect-freehand) |
| `js/`, `css/` | gebaute Oberfläche, wird mit ausgeliefert |
| `tests/` | PHP-Unit-Tests |

Seiten liegen als `.anote`-Dateien (JSON) unter `Notizbücher/<Notizbuch>/<Abschnitt>/` im Speicher
des Nutzers, eingefügte Bilder im Ordner `.medien` des Abschnitts.

## Zusammenarbeit

Wer dieselbe Seite geöffnet hat, bearbeitet sie gemeinsam: Änderungen werden als Yjs-Updates über
`POST api/pages/{id}/sync` ausgetauscht (regelmäßige Abfrage, kein zusätzlicher Dienst nötig) und
in den Browsern zusammengeführt. Der Server speichert die Updates nur (`austit_nb_sync`) und führt
Buch, wer gerade auf der Seite ist (`austit_nb_presence`). Die `.anote`-Datei bleibt die
gespeicherte Fassung der Seite.

Position, Größe und Text eines Elements werden getrennt zusammengeführt. Der Text eines Textblocks
gilt als Ganzes: Tippen zwei Personen gleichzeitig im selben Block, gewinnt die letzte Änderung.

## Entwicklung

```sh
npm ci
npm run build   # baut js/notebook.mjs und css/notebook.css
npm test        # Logik-Tests der Oberfläche
```

Die App wird in der austit Cloud unter `apps/austit_notebook` entwickelt. Dieses Repository wird
daraus mit `austit-dev/sync-notebook-repo.sh` erzeugt bzw. aktualisiert.

## Lizenz

AGPL-3.0-or-later, siehe [LICENSE](LICENSE). Verwendete Bibliotheken (Vue, TipTap, Yjs,
perfect-freehand u. a.) stehen unter der MIT-Lizenz.
