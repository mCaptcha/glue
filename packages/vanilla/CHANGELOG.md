## Conventions

-   internal: changes within the library that don't affect API exposed to
    end users

-   external: changes within the library that affect API exposed to end
    users

## 0.1.0-rc2

### Fixed

-   [internal] typo

## 0.1.0-rc1

## Changed

-   [external] Installation code: We've added the ability to use mCaptcha with JavaScript disabled by
    [using a CLI tool](https://mcaptcha.org/docs/user-manual/cli). Installation code for `0.1.0-rc1`:

    ```html
    <label
      data-mcaptcha_url="{{paste your widget link here}}"
      for="mcaptcha__token"
      id="mcaptcha__token-label"
    >
      mCaptcha authorization token.
      <a
    	href="https://mcaptcha.org/docs/user-manual/how-to-mcaptcha-without-js/"
    	>Instructions</a
      >.
      <input type="text" name="mcaptcha__token" id="mcaptcha__token" />
    </label>
    <div id="mcaptcha__widget-container"></div>
    <script src="https://unpkg.com/@mcaptcha/vanilla-glue@0.1.0-rc2/dist/index.js"></script
    ```

    Please preserve the `id` on the `<label>` and `<input>` elements.
    They will be marked hidden by the JavaScript library.

    Installation code **pre** `0.1.0-rc1`:

    ```html
    <div id="mcaptcha__widget-container"></div>
    <script
    	src="https://unpkg.com/@mcaptcha/vanilla-glue@0.1.0-alpha3/dist/index.js"
    >
    	</script
    	<script charset="utf-8">
    		let config = {
    			widgetLink: new URL( "{{ your widget link }}"),
    		};
    		new mcaptchaGlue.default(config);
    </script>
    ```

## `0.1.0-alpha-2`

### Changed

-   [external] event handler is no longer automatically registered. The
    user is expected to call `init()`. See
    [`./static/embeded.html`](./static/embeded.html) for more information.

## Removed

-   [external] fixed inline styling for the container
    `<div>`(id=`mcaptcha__widget-container`) is no longer necessary.
    Please set styling that works that works best for your app
-   [internal] `iframe` fixed inline styling is removed, it extends to
    full width of the page.

## `0.1.0-alpha-2`

### Changed

-   [internal] verify message origin from `iframe` source

### Removed

-   [external] `dataset-mcaptcha_host` is no longer required in client
    side snippet

## `0.1.0-alpha-1`

-   First working version
