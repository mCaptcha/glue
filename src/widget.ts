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

export const INPUT_NAME = 'mcaptcha__token';
export const ID = 'mcaptcha-widget__iframe';

class Widget {
  element: HTMLElement | null = null;
  parentElement: HTMLElement | null = null;
  hostUrl: string | null = null;
  inputElement: HTMLInputElement | null = null;

  get() {
    if (this.element === null || this.element === undefined) {
      const element = document.getElementById(ID);
      if (element === null || element === undefined) {
        throw new Error(`Element ${ID} is undefined`);
      } else {
        this.element = element;
      }
    }
    return this.element;
  }

  getParent() {
    if (this.parentElement === null || this.parentElement === undefined) {
      this.parentElement = <HTMLElement>this.get().parentElement;
    }
    return this.parentElement;
  }

  getHost() {
    if (this.hostUrl === null || this.hostUrl === undefined) {
      this.hostUrl = <string>this.get().dataset.mcaptcha_host;
    }
    return this.hostUrl;
  }

  setToken(val: string) {
    if (this.inputElement === null || this.inputElement === undefined) {
      this.inputElement = document.createElement('input');
      this.inputElement.id = INPUT_NAME;
      this.inputElement.name = INPUT_NAME;
      this.inputElement.hidden = true;
      this.getParent().appendChild(this.inputElement);
    }
    this.inputElement.value = val;
  }
}

export default Widget;
