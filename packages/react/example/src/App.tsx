import React from 'react'

import { MCaptchaWidget, WidgetConfig, SiteKey } from '@mcaptcha/react-glue'
import 'react-glue/dist/index.css'

const App = () => {
  const siteKey: SiteKey = {
    key: 'foo'
  }
  const config: WidgetConfig = {
    siteKey
  }
  return <MCaptchaWidget {...config} />
}

export default App
