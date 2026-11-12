<?php

/**
 * austit Cloud theme
 * Colors derived from https://austit.de
 */
class OC_Theme {
	public function getBaseUrl(): string {
		return 'https://austit.de';
	}

	public function getDocBaseUrl(): string {
		return 'https://austit.de';
	}

	public function buildDocLinkToKey(string $key): string {
		return 'https://austit.de';
	}

	public function getProductName(): string {
		return 'austit Cloud';
	}

	public function getSyncClientUrl(): string {
		return 'https://austit.de';
	}

	public function getiOSClientUrl(): string {
		return 'https://austit.de';
	}

	public function getAndroidClientUrl(): string {
		return 'https://austit.de';
	}

	public function getFDroidClientUrl(): string {
		return 'https://austit.de';
	}

	public function getiTunesAppId(): string {
		return '';
	}

	public function getTitle(): string {
		return 'austit Cloud';
	}

	public function getName(): string {
		return 'austit Cloud';
	}

	public function getHTMLName(): string {
		return 'austit Cloud';
	}

	public function getEntity(): string {
		return 'austit.de';
	}

	public function getSlogan(): string {
		return 'Deine Daten. Deine Cloud.';
	}

	public function getColorPrimary(): string {
		return '#2f8fd0';
	}

	public function getColorBackground(): string {
		return '#0f1724';
	}

	public function getTextColorPrimary(): string {
		return '#ffffff';
	}

	public function getScssVariables(): array {
		return [
			'color-primary' => '#2f8fd0',
		];
	}

	/**
	 * License and source code page (AGPL), falls back to the public source code page
	 * when the austit_shell app is not enabled.
	 */
	private function getLegalUrl(): string {
		try {
			$url = \OCP\Server::get(\OCP\IURLGenerator::class)->linkToRoute('austit_shell.Legal.index');
		} catch (\Throwable) {
			$url = '';
		}
		return $url !== '' ? $url : 'https://austit.de/quellcode';
	}

	public function getLongFooter(): string {
		return '<a href="https://austit.de" target="_blank" rel="noreferrer noopener" class="entity-name">austit Cloud</a> – Deine Daten. Deine Cloud.<br/>'
			. '<span class="footer__legal-links">'
			. '<a href="https://austit.de/impressum" class="legal" target="_blank" rel="noreferrer noopener">Impressum</a> · '
			. '<a href="https://austit.de/datenschutz" class="legal" target="_blank" rel="noreferrer noopener">Datenschutzerklärung</a> · '
			. '<a href="' . htmlspecialchars($this->getLegalUrl()) . '" class="legal">Lizenzen &amp; Quellcode</a>'
			. '</span><br/>'
			. '<span class="austit-support">Support: <a href="mailto:info@austit.de">info@austit.de</a> · <a href="https://austit.de">austit.de</a></span>';
	}
}
