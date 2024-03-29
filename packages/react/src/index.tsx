// Copyright © 2021 Aravinth Manivnanan <realaravinth@batsense.net>.
// SPDX-FileCopyrightText: 2023 Aravinth Manivannan <realaravinth@batsense.net>
//
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT

import * as React from 'react'
import { useState, useRef, useEffect, ReactElement } from 'react'

import Widget, { ConfigurationError } from '@mcaptcha/core-glue'
import * as lib from '@mcaptcha/core-glue'

export const INPUT_NAME = 'mcaptcha__token'
export const INPUT_LABEL_ID = 'mcaptcha__token-label'
export const INSTRUCTIONS_URL =
  'https://mcaptcha.org/docs/user-manual/how-to-mcaptcha-without-js/'

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

  const input = useRef<HTMLInputElement>(null)
  const label = useRef<HTMLLabelElement>(null)

  const [token, setToken] = useState('')
  const w = new Widget(config, setToken)

  useEffect(() => {
    ;[input, label].forEach((item) => {
      if (item && item.current) {
        item.current.style.display = 'none'
      }
      if (input && input.current) {
        input.current.readOnly = true
      }
    })

    w.listen()
    return () => w.destroy()
  })

  return (
    <div style={containerStyle}>
      <label
        id={INPUT_LABEL_ID}
        ref={label}
        data-mcaptcha_url={w.widgetLink.toString()}
        htmlFor={INPUT_NAME}
      >
        mCaptcha authorization token.{' '}
        <a href={INSTRUCTIONS_URL}>Instructions</a>.
        <input
          ref={input}
          id={INPUT_NAME}
          name={INPUT_NAME}
          value={token}
          required
          type='text'
        />
      </label>
      <iframe
        title='mCaptcha'
        src={w.widgetLink.toString()}
        role='presentation'
        name='mcaptcha-widget__iframe'
        id='mcaptcha-widget__iframe'
        scrolling='no'
        sandbox='allow-same-origin allow-scripts allow-popups'
        width='100%'
        height='100%'
        frameBorder='0'
      />
    </div>
  )
}
export { ConfigurationError }
export type SiteKey = lib.SiteKey
export type WidgetConfig = lib.WidgetConfig
