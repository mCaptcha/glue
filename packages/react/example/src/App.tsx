// SPDX-FileCopyrightText: 2023 Aravinth Manivannan <realaravinth@batsense.net>
//
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT

import React from 'react'

import { MCaptchaWidget, WidgetConfig } from 'react-glue'

const App = () => {
  const config: WidgetConfig = {
    widgetLink: new URL(
      'https://demo.mcaptcha.org/widget/?sitekey=6FFcZhbDZ1eqvp12QFEN8LQH9yACJZ3W'
    )
  }
  return <MCaptchaWidget {...config} />
}

export default App
