<!--
SPDX-FileCopyrightText: 2023 Aravinth Manivannan <realaravinth@batsense.net>

SPDX-License-Identifier: Apache-2.0
SPDX-License-Identifier: MIT
-->
<script lang="ts">
	/*
	 * mCaptcha is a PoW based DoS protection software.
	 * This is the frontend web component of the mCaptcha system
	 * Copyright © 2021 Aravinth Manivnanan <realaravinth@batsense.net>.
	 *
	 * Use of this source code is governed by Apache 2.0 or MIT license.
	 * You shoud have received a copy of MIT and Apache 2.0 along with
	 * this program. If not, see <https://spdx.org/licenses/MIT.html> for
	 * MIT or <http://www.apache.org/licenses/LICENSE-2.0> for Apache.
	 */

	import { onMount, onDestroy } from 'svelte';
	import { default as CoreWidget } from '@mcaptcha/core-glue';
	import { WidgetConfig } from '@mcaptcha/core-glue';

	//export const ssr = false;
	export let config: WidgetConfig;

	const INPUT_LABEL_ID = 'mcaptcha__token-label';
	const INPUT_NAME = 'mcaptcha__token';
	const INSTRUCTIONS_URL = 'https://mcaptcha.org/docs/user-manual/how-to-mcaptcha-without-js/';

	let token = '';

	const setToken = (t: string) => (token = t);

	const w = new CoreWidget(config, setToken);
	let mcaptchaLabel;
	let mcaptchaInput;

	onMount(() => {
		mcaptchaLabel.style.display = 'none';
		mcaptchaInput.style.display = 'none';
		mcaptchaInput.readonly = true;
		w.listen();
	});
	const cleanup = (): void => w.destroy();
	onDestroy(() => cleanup);
</script>

<div class="mcaptcha__widget-container">
	<label
		id={INPUT_LABEL_ID}
		for={INPUT_NAME}
		data-mcaptcha_url={w.widgetLink.toString()}
		bind:this={mcaptchaLabel}
	>
		mCaptcha authorization token. <a href={INSTRUCTIONS_URL}>Instructions</a>
		<input
			id={INPUT_NAME}
			name={INPUT_NAME}
			value={token}
			required
			type="text"
			bind:this={mcaptchaInput}
		/>
	</label>
	<iframe
		title="mCaptcha"
		src={w.widgetLink.toString()}
		role="presentation"
		name="mcaptcha-widget__iframe"
		id="mcaptcha-widget__iframe"
		scrolling="no"
		sandbox="allow-same-origin allow-scripts allow-popups"
		width="100%"
		height="100%"
		frameBorder="0"
	/>
</div>
