## Conventions

- internal: changes within the library that don't affect API exposed to
  end users

- external: changes within the library that affect API exposed to end
  users

## `0.1.0-alpha-2`

### Changed

- [external] event handler is no longer automatically registered. The
  user is expected to call `init()`. See
  [`./static/embeded.html`](./static/embeded.html) for more information.

## `0.1.0-alpha-2`

### Changed

- [internal] verify message origin from `iframe` source

### Removed

- [external] `dataset-mcaptcha_host` is no longer required in client
  side snippet

## `0.1.0-alpha-1`

- First working version
