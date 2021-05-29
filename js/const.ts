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

/** mcaptcha checkbox ID **/
export const btnId = 'widget__verification-checkbox';

/** get sitekey */
export const sitekey = () => {
  let sitekey;
  return (() => {
    if (sitekey === null || sitekey === undefined) {
      sitekey = new URL(window.location.href).searchParams.get('sitekey');
      if (sitekey === null || sitekey === undefined) {
        console.error(window.location.href);
        throw new Error(`Define sitekey in query parameter)`);
      }
    }
    return sitekey;
  })();
};

/** mCaptcha API routes */
export const ROUTES = (() => {
  const getConfig = '/api/v1/pow/config';
  const verififyPoW = '/api/v1/pow/verify';

  return {
    /** get URL to fetch PoW configuration */
    getConfig,
    /** get URL to verify PoW*/
    verififyPoW,
  };
})();

/** get mCaptcha verifify checkbox button */
export const btn = () => {
  let btn;
  return (() => {
    if (btn === null || btn === undefined) {
      btn = document.getElementById(btnId);
      if (btn === null || btn === undefined) {
        throw new Error(`mCaptcha button not found)`);
      }
    }
    return btn;
  })();
};

export const inputId = 'mcaptcha-response';
