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

import Widget from "./widget";
import * as wLib from "./widget";
import * as glue from "./index";

("use strict");

const IFRAME_ID = "mcaptcha-widget__iframe";

const setup = (source: URL) => {
  const IFRAME = document.createElement("iframe");
  const IFRAM_SOURCE = source.toString();
  IFRAME.id = IFRAME_ID;
  IFRAME.src = IFRAM_SOURCE;

  const container = document.createElement("div");
  container.appendChild(IFRAME);

  const FORM = document.createElement("form");
  FORM.appendChild(container);
  document.body.appendChild(FORM);
};

afterEach(() => {
  console.log("removing div element");
  let div = document.querySelector("div");
  if (div) {
    div.remove();
  }
});

it("Widget works", () => {
  const w = new Widget();

  try {
    w.get();
  } catch (e: any) {
    expect(e.message).toContain("is undefined");
  }

  const IFRAM_SOURCE = new URL(
    "https://demo.mcaptcha.org/widget/?sitekey=idontexist"
  );
  setup(IFRAM_SOURCE);

  const IFRAME = <HTMLElement>document.getElementById(IFRAME_ID);
  expect(w.get()).toBe(IFRAME);
  expect(w.getParent()).toBe(IFRAME.parentElement);
  expect(w.getHost()).toContain("demo.mcaptcha.org");

  const token = "token";
  w.setToken(token);
  const input = <HTMLInputElement>document.getElementById(wLib.INPUT_NAME);
  expect(input.value).toBe(token);
});

it("message handler works", async () => {
  const IFRAM_SOURCE = new URL(
    "https://demo.mcaptcha.org/widget/?sitekey=idontexist"
  );
  setup(IFRAM_SOURCE);
  let input: HTMLInputElement | null = null;

  glue.init();

  const token = ["foo", "bar"];
  token.forEach((t) => {
    let data = {
      data: {
        token: t,
      },
      origin: IFRAM_SOURCE.toString(),
    };
    let event = new MessageEvent("message", data);
    glue.handle(event);
    if (!input) {
      input = <HTMLInputElement>document.getElementById(wLib.INPUT_NAME);
    }
    expect(input.value).toBe(t);

    data = {
      data: {
        token: `${t}2`,
      },
      origin: new URL("https://fake.example.com").toString(),
    };
    event = new MessageEvent("message", data);
    glue.handle(event);
    expect(input.value).toBe(t);
  });
});
