import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import { MCaptchaWidget, Config, INPUT_NAME, ConfigurationError } from '.'

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

describe('MCaptchaWidget', () => {
  it('with site key', () => {
    if (container) {
      act(() => render(<MCaptchaWidget siteKey='foo' />, container))
      let w = container.querySelector(`#${INPUT_NAME}`)
      expect(w).toBeTruthy()
    }
  })

  it('with widget link', () => {
    if (container) {
      act(() =>
        render(<MCaptchaWidget widgetLink='https://example.com' />, container)
      )
      let w = container.querySelector(`#${INPUT_NAME}`)
      expect(w).toBeTruthy()
    }
  })
  it('without configuration params, should error out', () => {
    if (container) {
      try {
        render(<MCaptchaWidget />, container)
      } catch (e) {
        expect(e.message).toBe(new ConfigurationError().message)
      }
    }
  })
})
