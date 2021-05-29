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

import prove from './prove';
import fetchPoWConfig from './fetchPoWConfig';
import sendWork from './sendWork';
import sendToParent from './sendToParent';
import * as CONST from './const';

/** add  mcaptcha widget element to DOM */
export const registerVerificationEventHandler = () => {
  const verificationContainer = <HTMLElement>(
    document.querySelector('.widget__verification-container')
  );
  verificationContainer.style.display = 'flex';
  CONST.btn().addEventListener('click', e => solveCaptchaRunner(e));
};

export const solveCaptchaRunner = async (e: Event) => {
  if (CONST.btn().checked == true) {
    return;
  }
  e.preventDefault();
  // steps:

  // 1. hide --before message
  CONST.messageText().before().style.display = 'none';

  // 1. show --during
  CONST.messageText().during().style.display = 'block';
  // 1. get config
  const config = await fetchPoWConfig();
  // 2. prove work
  const proof = await prove(config);
  // 3. submit work
  const token = await sendWork(proof);
  // 4. send token
  sendToParent(token);
  // 5. mark checkbox checked
  CONST.btn().checked = true;
  CONST.messageText().during().style.display = 'none';
};

registerVerificationEventHandler();