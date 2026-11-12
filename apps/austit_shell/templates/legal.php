<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/** @var array $_ */
?>
<div class="guest-box austit-legal">
	<h2>Lizenzen &amp; Quellcode</h2>
	<p>
		Die austit Cloud basiert auf <strong>Nextcloud</strong> und weiterer freier Software.
		Nextcloud und die Anpassungen der austit Cloud stehen unter der
		<a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank" rel="noreferrer noopener">GNU Affero General Public License, Version 3</a>
		oder später (AGPL-3.0-or-later).
	</p>
	<p>
		Den vollständigen Quellcode der hier betriebenen Version, einschließlich aller Änderungen, erhältst du unter
		<a href="<?php p($_['sourceCodeUrl']); ?>" target="_blank" rel="noreferrer noopener"><?php p($_['sourceCodeUrl']); ?></a>.
	</p>
	<p>
		Die Lizenzen der enthaltenen Komponenten liegen dem Quellcode bei.
		Für die Software gilt keine Gewährleistung im Rahmen der Lizenzbedingungen.
	</p>
</div>
