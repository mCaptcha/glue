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

| Framework                        | Source Code                            | Documentation                                                                                                   | npm package name                                               |
| -------------------------------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| Vanilla JavaScript(No Framework) | [packages/vanilla](./packages/vanilla) | [![0.1.0](https://img.shields.io/badge/TypeScript_docs-master-2b7489)](https://mcaptcha.github.io/glue/vanilla) | [`mcaptcha-glue`](https://www.npmjs.com/package/mcaptcha-glue) |
| React JS                         | [packages/react](./packages/react)     | [![0.1.0](https://img.shields.io/badge/TypeScript_docs-master-2b7489)](https://mcaptcha.github.io/glue/react/)  | TBA                                                            |
