/*
 * mCaptcha is a PoW based DoS protection software.
 * This is the frontend web component of the mCaptcha system
 * Copyright © 2021 Aravinth Manivnanan <realaravinth@batsense.net>.
 *
 * Use of this source code is governed by Apache 2.0 or MIT license.
 * You shoud have received a copy of MIT and Apache 2.0 along with
 * this program. If not, see <https://spdx.org/licenses/MIT.html> for
 * MIT or <http://www.apache.org/licenses/LICENSE-2.0> for Apache.
 */
const fs = require('fs');
const path = require('path');
import {enableFetchMocks} from 'jest-fetch-mock';
import fetchMock from 'jest-fetch-mock';

import * as CONST from '../const';

export const sitekey = 'imbatman';
export const provider = 'https://mcaptcha.org';

/** get base HTML with empty mCaptcha container */
export const getBaseHtml = () => {
  const base = document.createElement('div');
  base.id = CONST.mcaptchaContainerID;
  base.dataset.sitekey = sitekey;
  base.dataset.provider = provider;

  return base;
};

export const loadWasm = async () => {
  let wasmInstance;

  const wasmPath = path.resolve(
    __dirname,
    'dist/c9c48035bfdbcf18bdb0.module.wasm',
  );
  const buffer = fs.readFileSync(wasmPath);
  const results = await WebAssembly.instantiate(buffer, {
    env: {
      memoryBase: 0,
      tableBase: 0,
      memory: new WebAssembly.Memory({initial: 1024}),
      table: new WebAssembly.Table({initial: 16, element: 'anyfunc'}),
      abort: console.log,
    },
  });

  wasmInstance = results.instance.exports;
  return wasmInstance;
};

/** mock wasm import */
export const mockWasm = async () => {
  enableFetchMocks(); // Read the .wasm file to memory
  const file = fs.readFileSync('../../pkg/index_bg.wasm');
  return (() =>
    fetchMock.mockResponse(async (request: any) => {
      if (request.url.endsWith('*.wasm')) {
        return {
          status: 200,
          body: file,
        };
      } else {
        return {
          status: 404,
          body: 'Not Found',
        };
      }
    }))();
};
