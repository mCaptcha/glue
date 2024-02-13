<div align="center">
  <h1>Glue</h1>
<strong>Code to embed mCaptcha widget</strong>

[![0.1.0](https://img.shields.io/badge/TypeScript_docs-master-2b7489)](https://mcaptcha.github.io/glue/)
![Build)](<https://github.com/mCaptcha/glue/workflows/CI%20(Linux)/badge.svg>)
[![codecov](https://codecov.io/gh/mCaptcha/glue/branch/master/graph/badge.svg)](https://codecov.io/gh/mCaptcha/glue)

</div>

mCaptcha widget should be loaded within an `iframe`

1. The user clicks on the validation button
2. The widget(within the `iframe`) computes proof-of-work
3. Sends it to the mCaptcha (backend)instance
4. If proof is valid, mCaptcha instance will send a verification token
5. Widget sends parent webpage(webpage containing the `iframe`) a
   message containing the verification token
6. Glue code receives message and embeds the token in a hidden input
   field with name and ID `mcaptcha__token`

The glue code is responsible receiving and embedding the token and
optionally create the `iframe` itself.

## Framework Support

To provide a smooth migration experience, glue code is implemented for
the following frameworks. If you wish to see your framework supported,
please open an issue!

| Framework                        | Source Code                            | Documentation                                                                                                   | npm package name                                                                                                        |
| -------------------------------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Vanilla JavaScript(No Framework) | [packages/vanilla](./packages/vanilla) | [![0.1.0](https://img.shields.io/badge/TypeScript_docs-master-2b7489)](https://mcaptcha.github.io/glue/vanilla) | [![NPM](https://img.shields.io/npm/v/@mcaptcha/vanilla-glue.svg)](https://www.npmjs.com/package/@mcaptcha/vanilla-glue) |
| React JS                         | [packages/react](./packages/react)     | [![0.1.0](https://img.shields.io/badge/TypeScript_docs-master-2b7489)](https://mcaptcha.github.io/glue/react/)  | [![NPM](https://img.shields.io/npm/v/@mcaptcha/react-glue.svg)](https://www.npmjs.com/package/@mcaptcha/react-glue)     |
| Next.JS                         | [packages/react](./packages/react)     | [![0.1.0](https://img.shields.io/badge/TypeScript_docs-master-2b7489)](https://mcaptcha.github.io/glue/react/)  | [![NPM](https://img.shields.io/npm/v/@mcaptcha/react-glue.svg)](https://www.npmjs.com/package/@mcaptcha/react-glue)     |
| Svelte JS                        | [packages/svelte](./packages/svelte)   | [![0.1.0](https://img.shields.io/badge/TypeScript_docs-master-2b7489)](https://mcaptcha.github.io/glue/svelte/) | [![NPM](https://img.shields.io/npm/v/@mcaptcha/svelte-glue.svg)](https://www.npmjs.com/package/@mcaptcha/svelte-glue)   |

## Core library

[![NPM](https://img.shields.io/npm/v/@mcaptcha/core-glue.svg)](https://www.npmjs.com/package/@mcaptcha/core-glue)

Framework-specific implementation provide markup(HTML) and hooks into
reactive state, the core functionality is implemented in
`@mcaptcha/core-glue`.

To implement `glue` for an unsupported framework, checkout
[`@mcaptcha/core-glue`](https://www.npmjs.com/package/@mcaptcha/core-glue).

## Funding

### NLnet

<div align="center">
	<img
		height="150px"
		alt="NLnet NGIZero logo"
		src="./static/third-party/NGIZero-green.hex.svg"
	/>
</div>

<br />

2023 development is funded through the [NGI0 Entrust
Fund](https://nlnet.nl/entrust), via [NLnet](https://nlnet.nl/). Please
see [here](https://nlnet.nl/project/mCaptcha/) for more details.
