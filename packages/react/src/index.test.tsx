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

import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import { MCaptchaWidget, WidgetConfig, INPUT_NAME, ConfigurationError } from '.'

let container = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  if (container) {
    unmountComponentAtNode(container)
    container.remove()
    container = null
  }
})

it('with site key', () => {
  const siteKey = {
    key: 'foo'
  }
  const config = {
    siteKey
  }
  if (container) {
    act(() => render(<MCaptchaWidget {...config} />, container))
    let w = container.querySelector(`#${INPUT_NAME}`)
    expect(w).toBeTruthy()
  }
})

it('with widget link', () => {
  if (container) {
    act(() =>
      render(
        <MCaptchaWidget widgetLink={new URL('https://example.com')} />,
        container
      )
    )
    let w = container.querySelector(`#${INPUT_NAME}`)
    expect(w).toBeTruthy()
  }
})
//  it('without configuration params, should error out', () => {
//    if (container) {
//      try {
//        render(<MCaptchaWidget />, container)
//      } catch (e) {
//        expect(e.message).toBe(new ConfigurationError().message)
//      }
//    }
//  })
it('message handler works', () => {
  if (container) {
    let link = new URL('http://example.com/foo/bar')
    act(() => {
      render(<MCaptchaWidget widgetLink={link} />, container)
    })
    let w = container.querySelector(`#${INPUT_NAME}`)
    expect(w.value).toBe('')
    const token = ['foo', 'bar']
    token.forEach((t) => {
      let data = {
        data: {
          token: t
        },
        origin: link.toString()
      }
      let event = new MessageEvent('message', data)
      act(() => window.dispatchEvent(event))
      expect(w.value).toBe(t)

      data = {
        data: {
          token: `${t}2`
        },
        origin: new URL('https://fake.example.com')
      }
      event = new MessageEvent('message', data)
      act(() => window.dispatchEvent(event))
      expect(w.value).toBe(t)
    })
  }
})
