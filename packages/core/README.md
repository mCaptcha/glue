<div align="center">

  <h1> Core Glue</h1>
  <strong>Shared code used in other JavaScript glue implementations</strong>

[![0.1.0](https://img.shields.io/badge/TypeScript_docs-master-2b7489)](https://mcaptcha.github.io/glue/core-glue)
![Build)](<https://github.com/mCaptcha/glue/workflows/CI%20(Linux)/badge.svg>)
[![codecov](https://codecov.io/gh/mCaptcha/glue/branch/master/graph/badge.svg)](https://codecov.io/gh/mCaptcha/glue)

</div>

## Usage

A custom glue implementation

```typescript
  const instanceUrl = "https://api.mcaptcha.org";
  const siteKey: g.SiteKey = {
    key: "randomSitekeyasShowninmCaptchaDashboard",
    instanceUrl: new URL(instanceUrl),
  };

  /** callback function to update hidden input field. Varies for each
   * framework/ glue implementation
   */
  const cb = (token: string): void {
	  let input = document.getElementById("mcaptcha__token");
	  if (input) {
		  input.value =  token;
	  }
  }

  const config: g.WidgetConfig = {
    siteKey,
  };

  const r = new Receiver(config, cb.setToken);

  // register listener when component is mounted/necessary HTML for
  // callback function is rendered
  r.listen();

  // teardown
  r.destroy();
```
