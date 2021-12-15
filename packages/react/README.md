<div align="center">

  <h1>React JS Glue library</h1>

<strong>Embed mCaptcha widget in webpages built using React Js</strong>


[![NPM](https://img.shields.io/npm/v/@mcaptcha-react-glue.svg)](https://www.npmjs.com/package/@mcaptcha/react-glue) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![0.1.0](https://img.shields.io/badge/TypeScript_docs-master-2b7489)](https://mcaptcha.github.io/glue/react-glue)
![Build)](<https://github.com/mCaptcha/glue/workflows/CI%20(Linux)/badge.svg>)
[![codecov](https://codecov.io/gh/mCaptcha/glue/branch/master/graph/badge.svg)](https://codecov.io/gh/mCaptcha/glue)

</div>

## Install

```bash
npm install --save @mcaptcha/react-glue
```

## Usage

```tsx
import React, { Component, WidgetConfig } from 'react'

import MyComponent from 'react-glue'
import 'react-glue/dist/index.css'

class Example extends Component {
  render() {
    const siteKey: SiteKey = {
      key: 'randomSiteKeyAsDisplayedInAdminPanel'
    }
    const config: WidgetConfig = { siteKey }

    return <MyComponent {...config} />
  }
}
```
