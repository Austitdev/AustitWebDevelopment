<?php
/**
 * austit Cloud - maintenance page override
 * Based on Nextcloud core template, only adds an austit support link.
 */
/** @var \OCP\IL10N $l */
/** @var \OCP\Defaults $theme */
?>
<div class="guest-box">
	<div class="icon-big icon-error"></div>
	<h2><?php p($l->t('Maintenance mode', [$theme->getName()])) ?></h2>
	<p><?php p($l->t('This %s instance is currently in maintenance mode, which may take a while.', [$theme->getName()])) ?> <?php p($l->t('This page will refresh itself when the instance is available again.')) ?></p>
	<p><?php p($l->t('Contact your system administrator if this message persists or appeared unexpectedly.')) ?></p>
</div>
