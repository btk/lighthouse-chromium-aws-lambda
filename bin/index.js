#!/usr/bin/env node
const chromium = require("chromium");

// Tell lighthouse where chromium is installed
process.env.CHROME_PATH = chromium.path;

require("lighthouse/lighthouse-cli");
