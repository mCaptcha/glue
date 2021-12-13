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

import Widget, { INPUT_NAME, ID } from "./index";

("use strict");

beforeEach(() => {
  const container = document.createElement("div");
  container.id = ID;
  document.body.appendChild(container);
});

afterEach(() => {
  console.log("removing div element");
  try {
    let div = document.querySelector("div");
    if (div) {
      div.remove();
    }
  } catch {}
});

const widgetLink = new URL(
  "https://demo.mcaptcha.org/widget/?sitekey=idontexist"
);

it("Widget fails when mcaptcha__widget-container div is absent", () => {
  document.getElementById(ID)?.remove();
  try {
    new Widget({ widgetLink: new URL(widgetLink) });
  } catch (e) {
    expect((<Error>e).message).toContain(ID);
  }
});

it("Widget works", () => {
  const w = new Widget({ widgetLink: new URL(widgetLink) });
  const token = "token";
  w.setToken(token);
  const input = <HTMLInputElement>document.getElementById(INPUT_NAME);
  expect(input.value).toBe(token);
});

it("message handler works", async () => {
  const w = new Widget({ widgetLink: new URL(widgetLink) });
  let input = <HTMLInputElement>document.getElementById(INPUT_NAME);

  const token = ["foo", "bar"];
  token.forEach((t) => {
    let data = {
      data: {
        token: t,
      },
      origin: widgetLink.toString(),
    };
    let event = new MessageEvent("message", data);
    w.receiver.handle(event);
    if (!input) {
    }
    expect(input.value).toBe(t);

    data = {
      data: {
        token: `${t}2`,
      },
      origin: new URL("https://fake.example.com").toString(),
    };
    event = new MessageEvent("message", data);
    w.receiver.handle(event);
    expect(input.value).toBe(t);
  });
});
