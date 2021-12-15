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

import type * as core from '@mcaptcha/core-glue';
import { ConfigurationError } from '@mcaptcha/core-glue';

/** Name and ID of the input field in which token will be rendered */
export const INPUT_NAME = 'mcaptcha__token';
/** See [`@mcaptcha/core-glue` docs](https://mcaptcha.github.io/glue/core-glue/modules.html#SiteKey) */
export type SiteKey = core.SiteKey;
/** See [`@mcaptcha/core-glue` docs](https://mcaptcha.github.io/glue/core-glue/modules.html#WidgetConfig) */
export type WidgetConfig = core.WidgetConfig;
/** See [`@mcaptcha/core-glue` docs](https://mcaptcha.github.io/glue/core-glue/classes/ConfigurationError.html) */
export { ConfigurationError };
