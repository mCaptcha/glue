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

import createWidget from './createWidget';
import prove from './prove';
import fetchPoWConfig from './fetchPoWConfig';
import sendWork from './sendWork';
import insertResult from './insertResult';

createWidget();

export const solveCaptchaRunner = async (_e: Event) => {
  // steps:
  // 1. get config
  // 2. prove work
  // 3. submit work
  // 4. insert token

  console.log('running');
  const config = await fetchPoWConfig();
  const proof = await prove(config);
  const token = await sendWork(proof);
  insertResult(token);
};

export * from './prove';
export * from './const';
export * from './fetchPoWConfig';
export * from './sendWork';
export * from './insertResult';
export * from './createWidget';
