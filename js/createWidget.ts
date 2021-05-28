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
import * as CONST from './const';
import {solveCaptchaRunner} from './index';

/** add  mcaptcha widget element to DOM */
export const createWidget = () => {
  const btn = <HTMLButtonElement>document.createElement('button');
  btn.id = CONST.btnId;
  const btnText = document.createTextNode(CONST.btnText);

  const img = <HTMLImageElement>document.createElement('img');
  img.className = CONST.btnImg;
  img.src = CONST.btnImgSrc;

  btn.appendChild(img);
  btn.appendChild(btnText);
  CONST.mcaptchaContainer().appendChild(btn);

  

  // TODO set onlcick handler
  document
    .getElementById(CONST.btnId)
    .addEventListener('click', (e) => solveCaptchaRunner(e));
};

export default createWidget;
