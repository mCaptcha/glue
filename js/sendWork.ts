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

import genJsonPayload from './utils/genJsonPayload';
import * as CONST from './const';
import {Work} from './prove';

export type Token = {
  token: string;
};

export const sendWork = async (payload: Work) => {
  const res = await fetch(CONST.ROUTES.verifyPoW(), genJsonPayload(payload));
  if (res.ok) {
    alert('success');
    const token: Token = await res.json();
    return token;
  } else {
    const err = await res.json();
    alert(`error: ${err.error}`);
  }
};

export default sendWork;
