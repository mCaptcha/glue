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
import {Token} from './sendWork';

/**
 * add token to form
 * @param {Token} token: token received from mCaptcha service
 * upon successful PoW validation
 * */
const insertResult = (token: Token) => {
  const invisibleInput = <HTMLInputElement>document.createElement('input');
  invisibleInput.hidden = true;
  invisibleInput.value = token.token;
  invisibleInput.id = CONST.inputId;
  invisibleInput.name = CONST.inputId;
  CONST.mcaptchaContainer.appendChild(invisibleInput);
};

export default insertResult;
