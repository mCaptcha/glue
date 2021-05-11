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

const mcaptchaContainerID = 'mcaptcha';
const mcaptchaContainer = () => {
  let container: HTMLDivElement;
  return (function() {
    if (container === null || container === undefined) {
      container = <HTMLDivElement>document.getElementById(mcaptchaContainerID);
    }
    return container;
  })();
};

const sitekey = () => {
  let sitekey;
  return (function() {
    if (sitekey === null || sitekey === undefined) {
      sitekey = mcaptchaContainer().dataset.sitekey;
    }
    return sitekey;
  })();
};

const provider = () => {
  let url;
  return (function() {
    if (sitekey === null || sitekey === undefined) {
      url = new URL(mcaptchaContainer().dataset.provider);
    }
    return url;
  })();
};

const ROUTES = {
  getConfig: '/api/v1/pow/config',
  verifyPoW: '/api/v1/pow/verify',
};

const btnId = 'mcaptcha-pow-btn';
const btnText = "I'm Human";

const inputId = 'mcaptcha-response';

const CONST = {
  ROUTES,
  mcaptchaContainer,
  mcaptchaContainerID,
  sitekey,
  provider,
  btnId,
  btnText,
  inputId,
};

export default CONST;
