const { chromium } = require('playwright');

(async () => {
  const urls = [
    { path: 'public/screenshots/dashboard-real-1.png', url: 'http://localhost:3000/dashboard' },
    { path: 'public/screenshots/home-real.png', url: 'http://localhost:3000/' },
    { path: 'public/screenshots/signin-real.png', url: 'http://localhost:3000/signin' }
  ];

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

  for (const u of urls) {
    try {
      console.log('Capturing:', u.url);
      await page.goto(u.url, { waitUntil: 'networkidle' });
      await page.screenshot({ path: u.path, fullPage: true });
      console.log('Saved:', u.path);
    } catch (err) {
      console.error('Failed to capture', u.url, err.message || err);
    }
  }

  await browser.close();
})();
