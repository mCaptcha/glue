// Copyright © 2021 Aravinth Manivnanan <realaravinth@batsense.net>.
// SPDX-FileCopyrightText: 2023 Aravinth Manivannan <realaravinth@batsense.net>
//
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT

import Receiver, * as g from "./index";

("use strict");

class CallBack {
  token: string = "";

  getToken = () => {
    return this.token;
  };

  setToken = (t: string): void => {
    this.token = t;
    let x = this.getToken();
    console.log(`token received ${x}`);
  };
}

const testEvents = (r: Receiver, cb: CallBack) => {
  const token = ["foo", "bar"];
  token.forEach((t) => {
    let data = {
      data: {
        token: t,
      },
      origin: r.widgetLink.toString(),
    };
    let event = new MessageEvent("message", data);
    r.handle(event);
    expect(cb.getToken()).toBe(t);

    data = {
      data: {
        token: `${t}2`,
      },
      origin: new URL("https://fake.example.com").toString(),
    };
    event = new MessageEvent("message", data);
    r.handle(event);
    expect(cb.getToken()).toBe(t);
  });
};

it("Receiver works with sitekey and default instance", () => {
  const siteKey: g.SiteKey = {
    key: "bar",
  };

  const cb = new CallBack();

  const config: g.WidgetConfig = {
    siteKey,
  };

  let r = new Receiver(config, cb.setToken);
  r.listen();
  testEvents(r, cb);
  expect(r.widgetLink.toString()).toBe(
    `https://demo.mcaptcha.org/widget/?sitekey=${siteKey.key}`
  );
  r.destroy();
});

it("Receiver works with sitekey and custom instance", () => {
  const instanceUrl = "https://api.mcaptcha.org";
  const siteKey: g.SiteKey = {
    key: "bar",
    instanceUrl: new URL(instanceUrl),
  };

  const cb = new CallBack();

  const config: g.WidgetConfig = {
    siteKey,
  };

  let r = new Receiver(config, cb.setToken);
  r.listen();
  testEvents(r, cb);
  expect(r.widgetLink.toString()).toBe(
    `${instanceUrl}/widget/?sitekey=${siteKey.key}`
  );
  r.destroy();
});

it("Receiver works with widgetLink", () => {
  const widgetLink = "https://demo.mcaptcha.org/widget?sitekey=foobar";
  const cb = new CallBack();

  const config: g.WidgetConfig = {
    widgetLink: new URL(widgetLink),
  };

  let r = new Receiver(config, cb.setToken);
  r.listen();
  testEvents(r, cb);
  expect(r.widgetLink.toString()).toBe(widgetLink);
  r.destroy();
});

it("Receiver throws error when mutual exclusion is violated", () => {
  const widgetLink = "https://demo.mcpatcha.org/widget?sitekey=foobar";
  const instanceUrl = "https://api.mcpatcha.org";
  const siteKey: g.SiteKey = {
    key: "bar",
    instanceUrl: new URL(instanceUrl),
  };

  const cb = new CallBack();

  const config: g.WidgetConfig = {
    widgetLink: new URL(widgetLink),
    siteKey,
  };

  try {
    new Receiver(config, cb.setToken);
  } catch (e: any) {
    expect(e.message).toBe(new g.ConfigurationError().message);
  }
});

it("Receiver throws error empty configuration is provided", () => {
  const cb = new CallBack();
  const config: g.WidgetConfig = {};

  try {
    new Receiver(config, cb.setToken);
  } catch (e: any) {
    expect(e.message).toBe(new g.ConfigurationError().message);
  }
});
