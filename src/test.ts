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

import Widget from './widget';
import * as lib from './index';
import * as wLib from './widget';

'use strict';

it('LazyElement works', () => {
  const IFRAME = document.createElement('iframe');
  IFRAME.id = 'mcaptcha-widget__iframe';
  IFRAME.dataset.mcaptcha_host = 'localhost';

  const container = document.createElement('div');
  container.appendChild(IFRAME);

  const FORM = document.createElement('form');
  FORM.appendChild(container);
  document.body.appendChild(FORM);

  const w = new Widget();
  expect(w.get()).toBe(IFRAME);
  expect(w.getParent()).toBe(container);
  expect(w.getParent()).toBe(container);
  expect(w.getHost()).toContain('localhost');

  const token = 'token';
  w.setToken(token);
  const input = <HTMLInputElement>document.getElementById(wLib.INPUT_NAME);
  expect(input.value).toBe(token);
});
