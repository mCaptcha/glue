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
import CONST from './const';

/** add  mcaptcha widget element to DOM */
const createWidget = () => {
  const btn = <HTMLInputElement>document.createElement('input');
  btn.type = 'button';
  btn.id = CONST.btnId;
  btn.value = CONST.btnText;

  CONST.mcaptchaContainer().appendChild(btn);

  // TODO set onlcick handler
  btn.addEventListener('click', () => console.log(''));
};

export default createWidget;
