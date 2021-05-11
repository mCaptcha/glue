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

/** mcaptcha container ID */
export const mcaptchaContainerID = 'mcaptcha';

/** get mCaptcha widget container */
export const mcaptchaContainer = () => {
  let container: HTMLDivElement;
  return (() => {
    if (container === null || container === undefined) {
      container = <HTMLDivElement>document.getElementById(mcaptchaContainerID);
      if (container === null || container === undefined) {
        throw new Error(`Define div element with id ${mcaptchaContainerID}`);
      }
    }
    return container;
  })();
};

/** get sitekey */
export const sitekey = () => {
  let sitekey;
  return (() => {
    if (sitekey === null || sitekey === undefined) {
      sitekey = mcaptchaContainer().dataset.sitekey;
      if (sitekey === null || sitekey === undefined) {
        throw new Error(`Define sitekey data attribute)`);
      }
    }
    return sitekey;
  })();
};

/** get mCaptcha provider */
export const provider = () => {
  let url;
  return (() => {
    if (url === null || url === undefined) {
      url = new URL(mcaptchaContainer().dataset.provider);

      if (url === null || url === undefined) {
        throw new Error(`Define url data attribute)`);
      }
    }
    return url;
  })();
};

/** mCaptcha API routes */
export const ROUTES = (() => {
  const getConfigPath = '/api/v1/pow/config';
  const verifyPoWPath = '/api/v1/pow/verify';

  let getConfig: string;
  let verifyPoW: string;

  return {
    /** get URL to fetch PoW configuration */
    getConfig: () => {
      if (getConfig === null || getConfig === undefined) {
        getConfig = `${provider().protocol}//${
          provider().host
        }${getConfigPath}`;
        console.log(getConfig);
      }

      return getConfig;
    },

    /** get URL to verify PoW*/
    verifyPoW: () => {
      if (verifyPoW === null || verifyPoW === undefined) {
        verifyPoW = `${provider().protocol}//${
          provider().host
        }${verifyPoWPath}`;
      }

      console.log(verifyPoW);
      return verifyPoW;
    },
  };
})();

export const btnId = 'mcaptcha-pow-btn';
export const btnText = "I'm Human";

export const inputId = 'mcaptcha-response';
