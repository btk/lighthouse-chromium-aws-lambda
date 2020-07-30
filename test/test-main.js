const test = require("ava");
const lighthouse = require("../index");
const lighthouseActual = require("lighthouse");

test.serial("CHROME_PATH environment variable set", t => {
	t.truthy(process.env.CHROME_PATH, "CHROME_PATH not set in environment");
});

test.serial("CHROME_PATH set on exported object", t => {
	t.is(process.env.CHROME_PATH, lighthouse.CHROME_PATH, "CHROME_PATH not set on exported object");
});

test.serial("The exported object seems to be lighthouse", t => {
	t.deepEqual(lighthouse, lighthouseActual);
});
