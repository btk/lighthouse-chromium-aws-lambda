# lighthouse-chromium

Wrapper around [lighthouse](https://github.com/GoogleChrome/lighthouse) that means there is no need to have Chrome installed where you are running it.
It will automatically download and install Chromium.

[![Build Status](https://travis-ci.com/BorderTech/lighthouse-chromium.svg?branch=master)](https://travis-ci.com/BorderTech/lighthouse-chromium)

## Using the Node CLI

Simply use it as you would use lighthouse. Everything is passed through. Read the [lighthouse documentation](https://github.com/GoogleChrome/lighthouse#lighthouse-----).

For example:

```bash
npm install -g lighthouse-chromium
lighthouse http://www.bom.gov.au/tas/forecasts/hobart.shtml --chrome-flags="--headless"
```

## Using programmatically

Simply use it as you would use lighthouse, and read the [lighthouse documentation](https://github.com/GoogleChrome/lighthouse/blob/master/docs/readme.md#using-programmatically).

Instead of requiring `lighthouse` require `lighthouse-chromium`:

```js
// const lighthouse = require('lighthouse');
const lighthouse = require('lighthouse-chromium');
```

The only difference, which you probably won't need, is that lighthouse has the property `.CHROME_PATH` which points to the dynamically installed chromium binary:

```js
const chromeLauncher = require('chrome-launcher');

// If you felt like it you could do this, but it should be unnecessary:
const chrome = await chromeLauncher.launch({ chromePath: lighthouse.CHROME_PATH });
```

## Configuration

### Environment variables

`CHROMIUM_REVISION` - install a specific Chromium revision:

```bash
export CHROMIUM_REVISION=768783
```

`CHROMIUM_DOWNLOAD_HOST` - download from a mirror:

```bash
export CHROMIUM_DOWNLOAD_HOST=https://npm.taobao.org/mirrors/chromium-browser-snapshots/
```

### NPM config

Lower-case variants of the [environment variables](#environment-variables) may be set in your .npmrc:

```ini
chromium_download_host=https://npm.taobao.org/mirrors/chromium-browser-snapshots/
chromium_revision=768783
```

If the both environment variable and npmrc are set then npmrc takes precedence.
