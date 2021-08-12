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

import Widget from './widget';

const WIDGET = new Widget();

/*
 * Handle messages sent from mCaptcha widget iframe
 */
export const handle = (e: MessageEvent) => {
  if (new URL(e.origin).host !== WIDGET.getHost()) {
    console.error(
      `expected message from ${WIDGET.getHost()} but received message from ${
        e.origin
      }. Aborting.`,
    );
    return;
  }
  const token = e.data.token;
  WIDGET.setToken(token);
};

/*
 * Register mCaptcha widget
 */
window.addEventListener('message', e => handle(e));
