const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();

  // Square 1:1 frames (1080x1080)
  const squareFrames = ['frame1', 'frame2', 'frame3'];
  for (const frame of squareFrames) {
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1080, height: 1080 });
    const filePath = path.resolve(__dirname, `${frame}.html`);
    await page.goto(`file:///${filePath.replace(/\\/g, '/')}`);
    await page.waitForTimeout(2000);
    const outPath = path.resolve(__dirname, `${frame}_export.png`);
    await page.screenshot({ path: outPath, clip: { x: 0, y: 0, width: 1080, height: 1080 } });
    console.log(`✓ Square saved: ${outPath}`);
    await page.close();
  }

  // Vertical 9:16 frames (1080x1920)
  const verticalFrames = ['frame1_vertical', 'frame2_vertical', 'frame3_vertical'];
  for (const frame of verticalFrames) {
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1080, height: 1920 });
    const filePath = path.resolve(__dirname, `${frame}.html`);
    await page.goto(`file:///${filePath.replace(/\\/g, '/')}`);
    await page.waitForTimeout(2000);
    const outPath = path.resolve(__dirname, `${frame}_export.png`);
    await page.screenshot({ path: outPath, clip: { x: 0, y: 0, width: 1080, height: 1920 } });
    console.log(`✓ Vertical saved: ${outPath}`);
    await page.close();
  }

  await browser.close();
  console.log('All frames exported.');
})();
