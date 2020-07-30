/**
 * Simply passes through all arguments to lighthouse whilst ensuring
 * lighthouse will use the dynamically installed version of Chromium.
 */
const chromium = require('chromium');
const lighthouse = require('lighthouse');

// The important bit, set the path to the Chrome binary and expose it on the export too, just in case.
lighthouse.CHROME_PATH = process.env.CHROME_PATH = chromium.path;

if (require.main === module) {
	// Module called directly, not via "require", so execute cli
	require('lighthouse/lighthouse-cli');
}

// Allow programmatic use
module.exports = lighthouse;
