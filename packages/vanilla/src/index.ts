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

import { SiteKey, WidgetConfig, ConfigurationError } from "@mcaptcha/core-glue";
import Receiver from "@mcaptcha/core-glue";

export const INPUT_NAME = "mcaptcha__token";
export const ID = "mcaptcha__widget-container";

export default class Widget {
  inputElement: HTMLInputElement;
  receiver: Receiver;

  constructor(config: WidgetConfig) {
    this.receiver = new Receiver(config, this.setToken);
    this.receiver.listen();

    const parentElement = document.getElementById(ID);
    if (parentElement === null || parentElement === undefined) {
      throw new Error(`Element ${ID}'s parent element is undefined`);
    }

    this.inputElement = document.createElement("input");
    this.inputElement.id = INPUT_NAME;
    this.inputElement.name = INPUT_NAME;
    this.inputElement.hidden = true;
    this.inputElement.required = true;
    parentElement.appendChild(this.inputElement);

    const iframe_id = "mcaptcha-widget__iframe";
    const iframe = document.createElement("iframe");
    iframe.title = "mCaptcha";
    iframe.src = this.receiver.widgetLink.toString();
    iframe.ariaRoleDescription = "presentation";
    iframe.name = iframe_id;
    iframe.id = iframe_id;
    iframe.scrolling = "no";
    try {
      (<any>iframe).sandbox = "allow-same-origin allow-scripts";
    } catch {
      try {
        (<any>iframe).sandbox.add("allow-same-origin");
        (<any>iframe).sandbox.add("allow-scripts");
      } catch {
        iframe.setAttribute("sandbox", "allow-same-origin allow-scripts");
      }
    }
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.frameBorder = "0";

    parentElement.appendChild(iframe);
  }

  /*
   * Set token value to a hidden input field in the form
   */
  setToken = (val: string) => (this.inputElement.value = val);
}

export { SiteKey, WidgetConfig, ConfigurationError };
