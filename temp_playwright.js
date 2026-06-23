const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('CONSOLE', msg.type(), msg.text()));
  page.on('pageerror', error => console.log('PAGEERROR', error.message));
  page.on('requestfailed', request => console.log('REQUESTFAILED', request.url(), request.failure()?.errorText));
  await page.goto('http://localhost:5175/solar/main.html', { waitUntil: 'networkidle' });
  console.log('PAGE URL', page.url());
  await page.screenshot({ path: 'solar_main.png' });
  await browser.close();
})();
