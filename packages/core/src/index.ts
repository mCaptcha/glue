// Copyright © 2021 Aravinth Manivnanan <realaravinth@batsense.net>.
// SPDX-FileCopyrightText: 2023 Aravinth Manivannan <realaravinth@batsense.net>
//
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT

/**
 * Site key configuration
 */
export type SiteKey = {
  /** site key as given in the mCaptcha admin dashboard */
  key: string;
  /** URL of the mCaptcha instance. Used in building widget link */
  instanceUrl?: URL;
};

/**
 * Widget configuration
 */
export type WidgetConfig = {
  /** site key configuration. Mutually exclusive with widgetLink */
  siteKey?: SiteKey;

  /** widget link. Mutually exclusive with siteKey */
  widgetLink?: URL;
};

/** configuration error thrown by MCaptchaWidget */
export class ConfigurationError extends Error {
  /** error message */
  message = "Provide either widget link or site key to display mCaptcha widget";
}

/** Listens for messages from mCaptcha widget and provides hooks to update
 * state and configure mCaptcha widget*/
export default class Receiver {
  private updateState: (token: string) => void;
  widgetLink: URL;

  /**
   * @param {WidgetConfig} config: used to configure widget link and
   * selectively filter messages
   * @param {(token: string) => void} updateState:
   * callback function used to update input field with the latest received
   * token.
   *
   * @throws {ConfigurationError}: This error is thrown when neither widget
   * link nor site key is provided to this compoenent or when both are provided
   * at the same time.
   */
  constructor(config: WidgetConfig, updateState: (token: string) => void) {
    this.updateState = updateState;
    if (config.widgetLink && config.siteKey) {
      throw new ConfigurationError();
    }

    if (config.widgetLink) {
      this.widgetLink = config.widgetLink;
    } else if (config.siteKey) {
      if (config.siteKey.instanceUrl) {
        this.widgetLink = config.siteKey.instanceUrl;
        this.widgetLink.pathname = "/widget/";
        this.widgetLink.search = `?sitekey=${config.siteKey.key}`;
      } else {
        this.widgetLink = new URL(
          `https://demo.mcaptcha.org/widget/?sitekey=${config.siteKey.key}`
        );
      }
    } else {
      throw new ConfigurationError();
    }
  }

  /**
   * Listen for messages from the mCaptcha iframe widget
   */
  listen() {
    window.addEventListener("message", this.handle);
  }

  /**
   * Delete listener
   */
  destroy() {
    window.removeEventListener("message", this.handle);
  }

  /**
   * Handle messages sent from mCaptcha widget iframe
   * @param {MessageEvent} e: message containing token from mCaptcha iframe.
   * Message origin should match the hostname of the widget link
   */
  handle = (e: MessageEvent) => {
    console.log(`message received from ${e.origin} with data: ${e.data.token}`);
    if (new URL(e.origin).host != this.widgetLink.host) {
      console.error(
        `expected message from ${this.widgetLink.host} but received message from ${e.origin}. Aborting.`
      );
      return;
    }
    this.updateState(e.data.token);
  };
}
