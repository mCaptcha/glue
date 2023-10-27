// Copyright © 2021 Aravinth Manivnanan <realaravinth@batsense.net>.
// SPDX-FileCopyrightText: 2023 Aravinth Manivannan <realaravinth@batsense.net>
//
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT

import { ID, INPUT_NAME, INPUT_LABEL_ID } from "./const";
import { SiteKey, WidgetConfig, ConfigurationError } from "@mcaptcha/core-glue";

import Widget from "./widget";
import { run } from "./widget";

run();

export default Widget;
export { SiteKey, WidgetConfig, ConfigurationError };
