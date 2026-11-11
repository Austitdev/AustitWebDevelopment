<?php
/**
 * austit Cloud - generic error page override
 * Based on Nextcloud core template, adds a direct way back to the login.
 */
/** @var \OCP\IL10N $l */
/** @var \OCP\Defaults $theme */
?>
<div class="guest-box">
	<h2><?php p($l->t('Error')) ?></h2>
	<ul>
	<?php foreach ($_['errors'] as $error):?>
		<li>
			<p><?php p($error['error']) ?></p>
			<?php if (isset($error['hint']) && $error['hint']): ?>
				<p class='hint'><?php p($error['hint']) ?></p>
			<?php endif;?>
		</li>
	<?php endforeach ?>
	</ul>
	<p><a class="button primary" href="<?php p(\OCP\Server::get(\OCP\IURLGenerator::class)->linkTo('', 'index.php')) ?>">
		<?php p($l->t('Back to %s', [$theme->getName()])); ?>
	</a></p>
</div>
