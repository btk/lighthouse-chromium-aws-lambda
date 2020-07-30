/**
 * Simply passes through all arguments to lighthouse whilst ensuring
 * lighthouse will use the dynamically installed version of Chromium.
 */
const chromium = require('chromium');

process.env.CHROME_PATH = chromium.path;

require('lighthouse/lighthouse-cli');
