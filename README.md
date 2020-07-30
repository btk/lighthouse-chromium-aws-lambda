# lighthouse-chromium

Wrapper around [lighthouse](https://github.com/GoogleChrome/lighthouse) that means there is no need to have Chrome installed where you are running it.
It will automatically download and install Chromium.

## Using the Node CLI

Simply use it as you would use lighthouse. Everything is passed through. Read the [lighthouse documentation](https://github.com/GoogleChrome/lighthouse#lighthouse-----).

For example:

```bash
 npx lighthouse-chromium http://www.bom.gov.au/tas/forecasts/hobart.shtml --chrome-flags="--headless"
```

## Using programmatically

Simply use it as you would use lighthouse, and read the [lighthouse documentation](https://github.com/GoogleChrome/lighthouse/blob/master/docs/readme.md#using-programmatically).

Instead of requiring `lighthouse` require `lighthouse-chromium`:

```js
// const lighthouse = require('lighthouse');
const lighthouse = require('lighthouse-chromium');
```

The only difference, which you probably won't need, is that lighthouse has an extra property, `CHROME_PATH` which points to the dynamically installed chromium binary:

```js
const chromeLauncher = require('chrome-launcher');

// If you felt like it you could do this, but it should be unnecessary:
const chrome = await chromeLauncher.launch({ chromePath: lighthouse.CHROME_PATH });
```

## Download Chromium from Mirror

Coming soon

## Download a specific Chromium Revision

Coming soon
