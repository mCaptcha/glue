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

import { render, act, fireEvent } from '@testing-library/svelte';
import Widget from './Widget.svelte';
import type { WidgetConfig, SiteKey } from './types';
import { INPUT_NAME, ConfigurationError } from './types';

let container: HTMLElement = null;
beforeEach(() => {
	// setup a DOM element as a render target
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	// cleanup on exiting
	if (container) {
		container.remove();
		container = null;
	}
});

it('should render', () => {
	const url = new URL('https://demo.mcaptcha.org/widget/?sitekey=foobar');
	const config: WidgetConfig = {
		widgetLink: url
	};
	const result = render(Widget, { props: { config } });
	const input = <HTMLInputElement>result.container.querySelector(`#${INPUT_NAME}`);
	expect(input.id).toBe(INPUT_NAME);
	expect(input.name).toBe(INPUT_NAME);
});

it('with site key', () => {
	const siteKey: SiteKey = {
		key: 'foo'
	};
	const config: WidgetConfig = {
		siteKey
	};
	if (container) {
		const result = render(Widget, { props: { config } });
		const input = result.container.querySelector(`#${INPUT_NAME}`);
		expect(input.id).toBe(INPUT_NAME);
	}
});

it('with widget link', () => {
	if (container) {
		const url = new URL('https://example.com');

		const config: WidgetConfig = {
			widgetLink: url
		};
		if (container) {
			const result = render(Widget, { props: { config } });
			const input = result.container.querySelector(`#${INPUT_NAME}`);
			expect(input.id).toBe(INPUT_NAME);
		}
	}
});

it('without configuration params, should error out', () => {
	if (container) {
		try {
			const config: WidgetConfig = {};
			if (container) {
				render(Widget, { props: { config } });
			}
		} catch (e) {
			expect(e.message).toBe(new ConfigurationError().message);
		}
	}
});
it('message handler works', async () => {
	if (container) {
		const link = new URL('http://example.com/foo/bar');
		const config: WidgetConfig = {
			widgetLink: link
		};

		const result = render(Widget, { props: { config } });

		const input = <HTMLInputElement>result.container.querySelector(`#${INPUT_NAME}`);
		expect(input.id).toBe(INPUT_NAME);

		const token = ['foo', 'bar'];
		const data = {
			data: {
				token: token[0]
			},
			origin: link.toString()
		};

		// proccess event and render token
		let event = new MessageEvent('message', data);
		await act(() => window.dispatchEvent(event));
		expect(input.value).toBe(token[0]);

		// proccess event and re-render token
		data.data.token = token[1];
		await act(() => window.dispatchEvent(event));
		expect(input.value).toBe(token[1]);

		// reject event since event.origin != message.origin
		data.data.token += '2';
		data.origin = new URL('https://fake.example.com').toString();
		event = new MessageEvent('message', data);
		await act(() => window.dispatchEvent(event));
		expect(input.value).toBe(token[1]);
	}
});
