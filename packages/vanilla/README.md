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
<div
	id="mcaptcha__widget-container"
></div>
<script src="../dist/index.js"></script>
<script charset="utf-8">
	let config = {
		widgetLink: new URL(
			"https://demo.mcaptcha.org/widget/?sitekey=pHy0AktWyOKuxZDzFfoaewncWecCHo23"
		),
	};
	new mcaptchaGlue.default(config);
</script>
```

## Example

See example form in [./static/embeded.html](./static/embeded.html)
