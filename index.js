const chromium = require("chromium");
const lighthouse = require("lighthouse");

// The important bit, set the path to the chromium binary and expose it on the export too, just in case.
lighthouse.CHROME_PATH = process.env.CHROME_PATH = chromium.path;

// Allow programmatic use
module.exports = lighthouse;
