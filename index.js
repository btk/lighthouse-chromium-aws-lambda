const chromium = require("chrome-aws-lambda");
const lighthouse = require("lighthouse");


module.exports = async(url, options) => {
  let browser = await chromium.puppeteer.launch({
    args: [...chromium.args, "--remote-debugging-port=9222"],
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
    ignoreHTTPSErrors: true,
  });

  options.port = 9222;

  return await lighthouse(url, options);
};
