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
	import {default as CoreWidget} from '@mcaptcha/core-glue';
	import {WidgetConfig, INPUT_NAME} from '@mcaptcha/core-glue';

	//export const ssr = false;
	export let config: WidgetConfig;

	let token = '';

	const setToken = (t: string) => (token = t);

	const w = new CoreWidget(config, setToken);

	onMount(() => w.listen());
	const cleanup = (): void => w.destroy();
	onDestroy(() => cleanup);
</script>

<div class="mcaptcha__widget-container">
	<input
		id="mcaptcha__token"
		name="mcaptcha__token"
		value={token}
		readonly
		hidden
		required
		type="text"
	/>
	<iframe
		title="mCaptcha"
		src={w.widgetLink.toString()}
		role="presentation"
		name="mcaptcha-widget__iframe"
		id="mcaptcha-widget__iframe"
		scrolling="no"
		sandbox="allow-same-origin allow-scripts"
		width="304"
		height="78"
		frameBorder="0"
	/>
</div>

<style>
	.mcaptcha__widget-container {
		width: 340px;
		height: 78px;
	}
</style>
