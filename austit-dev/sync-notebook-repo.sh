#!/bin/sh
# SPDX-FileCopyrightText: 2026 austit.de
# SPDX-License-Identifier: AGPL-3.0-or-later
#
# Uebertraegt apps/austit_notebook mit seinem Git-Verlauf in das eigenstaendige
# Notizbuch-Repository (Standard: ../austit-notebook neben diesem Repository).
#
# Aufruf: sh austit-dev/sync-notebook-repo.sh [Zielverzeichnis]
set -e

ROOT=$(git rev-parse --show-toplevel)
TARGET=${1:-"$ROOT/../austit-notebook"}
PREFIX=apps/austit_notebook
BRANCH=austit-notebook-export

cd "$ROOT"
git subtree split --prefix="$PREFIX" -b "$BRANCH" >/dev/null

if [ ! -d "$TARGET/.git" ]; then
	git init -q -b main "$TARGET"
fi

git -C "$TARGET" pull -q --ff-only "$ROOT" "$BRANCH"
git branch -q -D "$BRANCH"

echo "Notizbuch-Repository aktualisiert: $TARGET ($(git -C "$TARGET" log --oneline -1))"
