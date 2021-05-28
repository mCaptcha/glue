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
//import * as CONST from '../const';
//import createWidget from '../createWidget';

import {getBaseHtml, mockWasm, loadWasm} from './setupTests';

it('create widget works', async () => {
  const body = document.querySelector('body');
  body.appendChild(getBaseHtml());
  //  loadWasm();
//  await mockWasm();

  // TODO figure out a way to add webassembly

  //  createWidget();

  //const widget = <HTMLInputElement>document.getElementById(CONST.btnId);
  //expect(widget.id).toBe(CONST.btnId);
  //expect(widget.value).toBe(CONST.btnText);
  //expect(widget.type).toBe('button');
});
