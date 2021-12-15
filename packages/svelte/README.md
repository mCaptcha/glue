<div align="center">

  <h1>Svelte JS Glue library</h1>

<strong>Embed mCaptcha widget in webpages built using Svelte Js</strong>

[![NPM](https://img.shields.io/npm/v/@mcaptcha-svelte-glue.svg)](https://www.npmjs.com/package/@mcaptcha/svelte-glue) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![0.1.0](https://img.shields.io/badge/TypeScript_docs-master-2b7489)](https://mcaptcha.github.io/glue/svelte-glue)
![Build)](<https://github.com/mCaptcha/glue/workflows/CI%20(Linux)/badge.svg>)
[![codecov](https://codecov.io/gh/mCaptcha/glue/branch/master/graph/badge.svg)](https://codecov.io/gh/mCaptcha/glue)

</div>

## Install

```bash
npm install --save @mcaptcha/svelte-glue
```

## Usage

```html
<script lang="ts">
	import Widget from '@mcaptcha/svelte-glue';

	const config = {
		widgetLink: new URL('https://demo.mcaptcha.org/widget/?sitekey=foo')
	};
</script>

<Widget {config} />
```
