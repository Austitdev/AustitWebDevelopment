<?php
/**
 * austit Cloud - 429 page override
 * Based on Nextcloud core template, adds a direct way back to the login.
 */
/** @var \OCP\IL10N $l */
/** @var \OCP\Defaults $theme */
?>
<div class="body-login-container update">
	<h2><?php p($l->t('Too many requests')); ?></h2>
	<p class="infogroup"><?php p($l->t('There were too many requests from your network. Retry later or contact your administrator if this is an error.')); ?></p>
	<p><a class="button primary" href="<?php p(\OCP\Server::get(\OCP\IURLGenerator::class)->linkTo('', 'index.php')) ?>">
		<?php p($l->t('Back to %s', [$theme->getName()])); ?>
	</a></p>
</div>
