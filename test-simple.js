const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function test() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 375, height: 812 },
  });
  
  const page = await context.newPage();
  const dir = '/tmp/screenshots';
  
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  try {
    console.log('Starting test...');
    
    // Test 1: EN homepage
    console.log('Loading EN homepage...');
    await page.goto('http://localhost:3001/en', { waitUntil: 'networkidle', timeout: 10000 });
    console.log('Loaded EN homepage');
    
    // Take screenshot
    await page.screenshot({ path: path.join(dir, '01-en-normal.png'), fullPage: false });
    console.log('Screenshot 1 saved');
    
    // Open menu
    const btn = await page.locator('button[aria-expanded]').first();
    if (await btn.isVisible()) {
      console.log('Clicking menu button...');
      await btn.click();
      await page.waitForTimeout(500);
      await page.screenshot({ path: path.join(dir, '02-en-menu.png'), fullPage: false });
      console.log('Screenshot 2 saved');
      await btn.click();
      await page.waitForTimeout(500);
    }
    
    // Test 2: ZH homepage
    console.log('Loading ZH homepage...');
    await page.goto('http://localhost:3001/zh', { waitUntil: 'networkidle', timeout: 10000 });
    console.log('Loaded ZH homepage');
    
    await page.screenshot({ path: path.join(dir, '03-zh-normal.png'), fullPage: false });
    console.log('Screenshot 3 saved');
    
    // Open menu
    const btn2 = await page.locator('button[aria-expanded]').first();
    if (await btn2.isVisible()) {
      console.log('Clicking ZH menu button...');
      await btn2.click();
      await page.waitForTimeout(500);
      await page.screenshot({ path: path.join(dir, '04-zh-menu.png'), fullPage: false });
      console.log('Screenshot 4 saved');
      await btn2.click();
      await page.waitForTimeout(500);
    }
    
    console.log('✓ Test completed');
    console.log(`Screenshots saved to ${dir}`);
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
}

test();
