<div align="center">

  <h1>Vanilla JavaScript Glue JavaScript library</h1>

<strong>Embed mCaptcha widget in webpages built using Vanilla JavaScript</strong>

[![0.1.0](https://img.shields.io/badge/TypeScript_docs-master-2b7489)](https://mcaptcha.github.io/glue/vanilla)
![Build)](<https://github.com/mCaptcha/glue/workflows/CI%20(Linux)/badge.svg>)
[![codecov](https://codecov.io/gh/mCaptcha/glue/branch/master/graph/badge.svg)](https://codecov.io/gh/mCaptcha/glue)

</div>

## Usage

Add this snippet to the form which requires to be protected using
mCaptcha

```html
<label
  data-mcaptcha_url="{{paste your widget link here}}"
  for="mcaptcha__token"
  id="mcaptcha__token-label"
>
  mCaptcha authorization token.
  <a
	href="https://mcaptcha.org/docs/user-manual/how-to-mcaptcha-without-js/"
	>Instructions</a
  >.
  <input type="text" name="mcaptcha__token" id="mcaptcha__token" />
</label>
<div id="mcaptcha__widget-container"></div>
<script src="https://unpkg.com/@mcaptcha/vanilla-glue@0.1.0-rc2/dist/index.js"></script
```

## Example

See example form in [./static/embeded.html](./static/embeded.html)
