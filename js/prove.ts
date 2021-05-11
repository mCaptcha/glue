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

import {gen_pow} from '../pkg/index';
import {PoWConfig} from './fetchPoWConfig';

export type Work = {
  result: string;
  nonce: number;
};

/**
 * proove work
 * @param {PoWConfig} config - the proof-of-work configuration using which
 * work needs to be computed
 * */
const prove = async (config: PoWConfig) => {
  const proofString = gen_pow(
    config.salt,
    config.string,
    config.difficulty_factor,
  );
  const proof: Work = JSON.parse(proofString);

  return proof;
};

export default prove;