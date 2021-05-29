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
      btn = <HTMLInputElement>document.getElementById(btnId);
      if (btn === null || btn === undefined) {
        throw new Error(`mCaptcha button not found)`);
      }
    }
    return btn;
  })();
};

export const messageText = () => {
  let beforeClass = 'widget__verification-text--before';
  let duringClass = 'widget__verification-text--during';
  let errorClass = 'widget__verification-text--error';
  let afterClass = 'widget__verification-text--after';

  let before: HTMLElement;
  let after: HTMLElement;
  let during: HTMLElement;
  let error: HTMLElement;

  return {
    before: () => {
      if (before === null || before === undefined) {
        before = <HTMLElement>document.querySelector(`.${beforeClass}`);
        if (before === null || before === undefined) {
          throw new Error(`before element not found)`);
        }
      }
      return before;
    },

    after: () => {
      if (after === null || after === undefined) {
        after = <HTMLSpanElement>document.querySelector(`.${afterClass}`);
        if (after === null || after === undefined) {
          throw new Error(`after element not found)`);
        }
      }
      return after;
    },

    during: () => {
      if (during === null || during === undefined) {
        during = <HTMLSpanElement>document.querySelector(`.${duringClass}`);
        if (during === null || during === undefined) {
          throw new Error(`before during not found)`);
        }
      }
      return during;
    },

    error: () => {
      if (error === null || error === undefined) {
        error = <HTMLSpanElement>document.querySelector(`.${errorClass}`);
        if (error === null || error === undefined) {
          throw new Error(`before error not found)`);
        }
      }
      return error;
    },
  };
};

export const inputId = 'mcaptcha-response';
