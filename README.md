<div align="center">

  <h1>PoW JavaScript library</h1>

<strong>JavaScript library to generate PoW for mCaptcha</strong>

[![0.1.0](https://img.shields.io/badge/TypeScript_docs-master-2b7489)](https://mcaptcha.github.io/browser/)
![Build)](<https://github.com/mCaptcha/browser/workflows/CI%20(Linux)/badge.svg>)
[![codecov](https://codecov.io/gh/mCaptcha/browser/branch/master/graph/badge.svg)](https://codecov.io/gh/mCaptcha/browser)
/div>

## Usage

Add this snippet to the form which requires to be protected using
mCaptcha

```html
<div style="width: 304px; height: 78px;">
  <iframe title="mCaptcha"
    src="<LINK TO WIDGET>"
    role="presentation"
    name="mcaptcha-widget__iframe"
    id="mcaptcha-widget__iframe"
    scrolling="no"
    sandbox="allow-same-origin allow-scripts"
    width="304"
    height="78"
    data-mcaptcha_host="<mCaptcha HOST LOCATION>"
    frameborder="0"
  ></iframe>
</div>
<script src="./dist/bundle.js"></script>
```

## Example

See example form in [./static/embeded.html](./static/embeded.html)
