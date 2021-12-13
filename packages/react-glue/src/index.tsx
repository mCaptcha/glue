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

import * as React from 'react'
import { useState, useEffect, ReactElement } from 'react'

import Widget, { ConfigurationError } from '@mcaptcha/core-glue'
import * as lib from '@mcaptcha/core-glue'

export const INPUT_NAME = 'mcaptcha__token'
/**
 * @param {URL?}widgetLink: URL of the widget. Use this only when you are using
 * a self-hosted instance of mCaptcha with a non-standard(unofficial) path(i.e,
 * widgets are not served from `/widget/?stiekey=uniqueSitekey`
 * @param {string?}sitekey: site key as given in the admin dashboard. Widget
 * link will be derived from this.
 *
 * @returns {ReactElement}: mCaptcha widget containing an input field, which
 * will hold the verification token and an iframe containing the widget
 *
 * @throws {ConfigurationError}: This error is thrown when neither widget link
 * nor site key is provided to this compoenent
 */
export const MCaptchaWidget = (config: WidgetConfig): ReactElement => {
  const containerStyle = {
    width: '340px',
    height: '78px'
  }

  const [token, setToken] = useState('')
  const w = new Widget(config, setToken)

  useEffect(() => {
    w.listen()
    return () => w.destroy()
  })

  return (
    <div style={containerStyle}>
      <input
        id={INPUT_NAME}
        name={INPUT_NAME}
        value={token}
        readOnly
        hidden
        required
        type='text'
      />
      <iframe
        title='mCaptcha'
        src={w.widgetLink.toString()}
        role='presentation'
        name='mcaptcha-widget__iframe'
        id='mcaptcha-widget__iframe'
        scrolling='no'
        sandbox='allow-same-origin allow-scripts'
        width='304'
        height='78'
        frameBorder='0'
      />
    </div>
  )
}
export { ConfigurationError }
export type SiteKey = lib.SiteKey
export type WidgetConfig = lib.WidgetConfig
