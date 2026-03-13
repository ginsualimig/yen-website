const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const VIEWPORT_WIDTH = 375;
const VIEWPORT_HEIGHT = 812;
const BASE_URL = 'http://localhost:3001';

async function runTests() {
  const browser = await chromium.launch();
  const context = await browser.createContext({
    viewport: { width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT },
  });
  
  const page = await context.newPage();
  const screenshotsDir = '/tmp/mobile-header-screenshots';
  
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const issues = [];
  const info = [];

  try {
    console.log(`\n📱 Testing Yenturi Mobile Header at ${VIEWPORT_WIDTH}px\n`);

    // ────────────────────────────────────────────────────────────
    // Test 1: English Homepage - Header normal state
    // ────────────────────────────────────────────────────────────
    console.log('TEST 1: English Homepage - Normal header state');
    await page.goto(`${BASE_URL}/en`, { waitUntil: 'networkidle' });
    await page.waitForLoadState('networkidle');
    
    // Check for header element
    const header = await page.locator('header').first();
    const headerBox = await header.boundingBox();
    
    if (!headerBox) {
      issues.push({
        severity: 'critical',
        issue: 'Header element not found',
        location: 'English homepage',
      });
    } else {
      info.push(`✓ Header found at ${headerBox.width}x${headerBox.height}px (viewport: ${VIEWPORT_WIDTH}px)`);
      
      // Check if header is full width
      if (headerBox.width < VIEWPORT_WIDTH - 10) {
        issues.push({
          severity: 'high',
          issue: `Header not full width. Width: ${headerBox.width}px, Expected: ${VIEWPORT_WIDTH}px`,
          location: 'English homepage',
        });
      }
    }

    // Check for hamburger menu button
    const hamburger = await page.locator('button[aria-label*="menu" i]').first();
    if (await hamburger.isVisible()) {
      info.push('✓ Hamburger menu button visible');
      const buttonBox = await hamburger.boundingBox();
      if (buttonBox && (buttonBox.width < 44 || buttonBox.height < 44)) {
        issues.push({
          severity: 'medium',
          issue: `Hamburger button too small: ${buttonBox.width}x${buttonBox.height}px (min 44x44px recommended)`,
          location: 'English homepage',
        });
      }
    } else {
      issues.push({
        severity: 'critical',
        issue: 'Hamburger menu button not visible on mobile',
        location: 'English homepage',
      });
    }

    // Check for logo
    const logo = await page.locator('header a').first();
    if (await logo.isVisible()) {
      info.push('✓ Logo visible');
      const logoBox = await logo.boundingBox();
      if (logoBox) {
        info.push(`  Logo size: ${logoBox.width}x${logoBox.height}px`);
      }
    }

    // Check for language toggle
    const langToggle = await page.locator('header a:has-text("EN"), header a:has-text("中文")').first();
    if (await langToggle.isVisible()) {
      info.push('✓ Language toggle visible');
    } else {
      issues.push({
        severity: 'high',
        issue: 'Language toggle not visible on mobile header',
        location: 'English homepage',
      });
    }

    // Screenshot: Normal header
    await page.screenshot({
      path: path.join(screenshotsDir, '01-en-header-normal.png'),
      fullPage: false,
    });
    info.push('📸 Screenshot: 01-en-header-normal.png');

    // ────────────────────────────────────────────────────────────
    // Test 2: English - Open Mobile Menu
    // ────────────────────────────────────────────────────────────
    console.log('\nTEST 2: English - Open mobile menu');
    const menuButton = await page.locator('button[aria-expanded]').first();
    
    if (await menuButton.isVisible()) {
      await menuButton.click();
      await page.waitForTimeout(400); // Wait for animation
      
      // Check menu visibility
      const mobileMenu = await page.locator('[aria-label="Mobile navigation"]');
      if (await mobileMenu.isVisible()) {
        info.push('✓ Mobile menu opened successfully');
        
        // Check menu items
        const menuItems = await page.locator('header nav a').count();
        info.push(`✓ Menu has ${menuItems} navigation items`);
        
        // Check if menu items are visible
        for (let i = 0; i < menuItems; i++) {
          const item = await page.locator('header nav a').nth(i);
          const isVisible = await item.isVisible();
          if (!isVisible) {
            issues.push({
              severity: 'high',
              issue: `Menu item ${i + 1} not visible when menu is open`,
              location: 'English - open menu',
            });
          }
        }
        
        // Check for text overflow
        const menuBox = await mobileMenu.boundingBox();
        if (menuBox) {
          info.push(`✓ Menu size: ${menuBox.width}x${menuBox.height}px`);
          if (menuBox.width > VIEWPORT_WIDTH) {
            issues.push({
              severity: 'high',
              issue: `Menu overflow detected. Width: ${menuBox.width}px, Viewport: ${VIEWPORT_WIDTH}px`,
              location: 'English - open menu',
            });
          }
        }
      } else {
        issues.push({
          severity: 'critical',
          issue: 'Mobile menu not visible after clicking hamburger',
          location: 'English - open menu',
        });
      }

      // Screenshot: Menu open
      await page.screenshot({
        path: path.join(screenshotsDir, '02-en-menu-open.png'),
        fullPage: false,
      });
      info.push('📸 Screenshot: 02-en-menu-open.png');

      // Close menu
      await menuButton.click();
      await page.waitForTimeout(400);
    } else {
      issues.push({
        severity: 'critical',
        issue: 'Menu button not accessible to click',
        location: 'English - open menu',
      });
    }

    // ────────────────────────────────────────────────────────────
    // Test 3: Scroll behavior - Sticky header
    // ────────────────────────────────────────────────────────────
    console.log('\nTEST 3: Sticky header on scroll');
    const headerBefore = await page.locator('header').first().boundingBox();
    
    await page.evaluate(() => window.scrollBy(0, 200));
    await page.waitForTimeout(200);
    
    const headerAfter = await page.locator('header').first().boundingBox();
    
    if (headerAfter && headerAfter.y === 0) {
      info.push('✓ Header remains sticky on scroll');
    } else {
      issues.push({
        severity: 'medium',
        issue: 'Header not properly sticky on scroll',
        location: 'Scroll behavior',
      });
    }

    // Screenshot: After scroll
    await page.screenshot({
      path: path.join(screenshotsDir, '03-en-header-scroll.png'),
      fullPage: false,
    });
    info.push('📸 Screenshot: 03-en-header-scroll.png');

    // Scroll back
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(200);

    // ────────────────────────────────────────────────────────────
    // Test 4: Chinese version - Header normal state
    // ────────────────────────────────────────────────────────────
    console.log('\nTEST 4: Chinese (中文) Homepage - Normal state');
    await page.goto(`${BASE_URL}/zh`, { waitUntil: 'networkidle' });
    await page.waitForLoadState('networkidle');
    
    // Check header exists
    const headerZh = await page.locator('header').first();
    if (await headerZh.isVisible()) {
      info.push('✓ Chinese header visible');
      
      // Check for language toggle showing English
      const langToggleCh = await page.locator('header a:has-text("EN")');
      if (await langToggleCh.isVisible()) {
        info.push('✓ Language toggle shows EN option (for switching to English)');
      }
    }

    // Check menu items in Chinese
    const menuItemsZh = await page.locator('header nav a, header nav li').count();
    info.push(`✓ Chinese menu has ${menuItemsZh} items`);

    // Screenshot: Chinese normal
    await page.screenshot({
      path: path.join(screenshotsDir, '04-zh-header-normal.png'),
      fullPage: false,
    });
    info.push('📸 Screenshot: 04-zh-header-normal.png');

    // ────────────────────────────────────────────────────────────
    // Test 5: Chinese - Open Mobile Menu
    // ────────────────────────────────────────────────────────────
    console.log('\nTEST 5: Chinese - Open mobile menu');
    const menuButtonZh = await page.locator('button[aria-expanded]').first();
    
    if (await menuButtonZh.isVisible()) {
      await menuButtonZh.click();
      await page.waitForTimeout(400);
      
      const mobileMenuZh = await page.locator('[aria-label="Mobile navigation"]');
      if (await mobileMenuZh.isVisible()) {
        info.push('✓ Chinese mobile menu opened successfully');
      }

      // Screenshot: Chinese menu open
      await page.screenshot({
        path: path.join(screenshotsDir, '05-zh-menu-open.png'),
        fullPage: false,
      });
      info.push('📸 Screenshot: 05-zh-menu-open.png');

      // Close menu
      await menuButtonZh.click();
      await page.waitForTimeout(400);
    }

    // ────────────────────────────────────────────────────────────
    // Test 6: Text overflow & touch targets
    // ────────────────────────────────────────────────────────────
    console.log('\nTEST 6: Text overflow and touch target checks');
    
    // Check all header nav items for overflow
    const allNavItems = await page.locator('header a, header button').all();
    for (let i = 0; i < allNavItems.length; i++) {
      const item = allNavItems[i];
      if (await item.isVisible()) {
        const box = await item.boundingBox();
        if (box) {
          // Check if text is clipped (using scroll width vs client width)
          const scrollWidth = await item.evaluate(el => el.scrollWidth);
          const clientWidth = await item.evaluate(el => el.clientWidth);
          
          if (scrollWidth > clientWidth + 2) { // 2px tolerance
            const text = await item.textContent();
            issues.push({
              severity: 'medium',
              issue: `Text overflow in header: "${text?.trim()}"`,
              location: 'Chinese menu',
              details: `scrollWidth: ${scrollWidth}, clientWidth: ${clientWidth}`,
            });
          }
          
          // Check touch target size (44x44px minimum)
          if ((box.width < 44 || box.height < 44) && (await item.getAttribute('role') === 'button' || await item.tagName() === 'button')) {
            info.push(`⚠ Small touch target: ${box.width}x${box.height}px`);
          }
        }
      }
    }

    // ────────────────────────────────────────────────────────────
    // Test 7: No horizontal scrolling
    // ────────────────────────────────────────────────────────────
    console.log('\nTEST 7: Horizontal scroll check');
    const bodyOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    
    if (!bodyOverflow) {
      info.push('✓ No horizontal scrolling detected');
    } else {
      issues.push({
        severity: 'high',
        issue: 'Horizontal scrolling detected on mobile viewport',
        location: 'Full page',
      });
    }

    // ────────────────────────────────────────────────────────────
    // Generate Report
    // ────────────────────────────────────────────────────────────
    const report = generateReport(info, issues);
    
    // Save report
    fs.writeFileSync(
      path.join(screenshotsDir, 'REPORT.md'),
      report
    );
    
    console.log('\n' + '='.repeat(70));
    console.log(report);
    console.log('='.repeat(70));
    console.log(`\n📁 Screenshots saved to: ${screenshotsDir}`);

  } catch (error) {
    console.error('Test error:', error);
    issues.push({
      severity: 'critical',
      issue: `Test execution error: ${error.message}`,
      location: 'General',
    });
  } finally {
    await browser.close();
  }
}

function generateReport(info, issues) {
  let report = `# Yenturi Mobile Header Testing Report\n\n`;
  report += `**Viewport:** 375x812px (Mobile)\n`;
  report += `**Date:** ${new Date().toLocaleString()}\n\n`;

  // Summary
  report += `## Summary\n\n`;
  report += `- **Info Points:** ${info.length}\n`;
  report += `- **Issues Found:** ${issues.length}\n`;
  
  const criticalCount = issues.filter(i => i.severity === 'critical').length;
  const highCount = issues.filter(i => i.severity === 'high').length;
  const mediumCount = issues.filter(i => i.severity === 'medium').length;
  
  if (criticalCount > 0) report += `  - **Critical:** ${criticalCount}\n`;
  if (highCount > 0) report += `  - **High:** ${highCount}\n`;
  if (mediumCount > 0) report += `  - **Medium:** ${mediumCount}\n`;

  // Info findings
  if (info.length > 0) {
    report += `\n## ✓ Positive Findings\n\n`;
    info.forEach(item => {
      report += `- ${item}\n`;
    });
  }

  // Issues
  if (issues.length > 0) {
    report += `\n## ⚠️ Issues Found\n\n`;
    
    // Group by severity
    const bySeverity = {
      critical: issues.filter(i => i.severity === 'critical'),
      high: issues.filter(i => i.severity === 'high'),
      medium: issues.filter(i => i.severity === 'medium'),
    };

    for (const [severity, items] of Object.entries(bySeverity)) {
      if (items.length === 0) continue;
      
      const icon = severity === 'critical' ? '🔴' : severity === 'high' ? '🟠' : '🟡';
      report += `\n### ${icon} ${severity.toUpperCase()} (${items.length})\n\n`;
      
      items.forEach(item => {
        report += `**Issue:** ${item.issue}\n`;
        report += `- **Location:** ${item.location}\n`;
        if (item.details) report += `- **Details:** ${item.details}\n`;
        report += `\n`;
      });
    }
  }

  // Recommendations
  report += `\n## 🔧 Recommended Fixes\n\n`;
  
  if (criticalCount > 0) {
    report += `### Critical Issues (Must Fix)\n`;
    report += `1. Ensure hamburger menu button is visible and functional on mobile\n`;
    report += `2. Verify mobile menu properly displays all navigation items\n`;
    report += `3. Check header width doesn't exceed viewport\n\n`;
  }

  if (highCount > 0) {
    report += `### High Priority Issues\n`;
    report += `1. Test header at actual mobile devices to verify button sizes (44x44px minimum)\n`;
    report += `2. Verify no text overflow in menu items, especially in Chinese\n`;
    report += `3. Check horizontal scrolling is prevented\n`;
    report += `4. Test menu open/close animation smoothness\n\n`;
  }

  if (mediumCount > 0) {
    report += `### Medium Priority Issues\n`;
    report += `1. Review touch target sizing for accessibility\n`;
    report += `2. Verify sticky header behavior on various scroll speeds\n`;
    report += `3. Test language toggle is easily accessible\n\n`;
  }

  report += `## 📱 Screenshots\n\n`;
  report += `| Screenshot | Description |\n`;
  report += `|---|---|\n`;
  report += `| 01-en-header-normal.png | English homepage - Normal header state |\n`;
  report += `| 02-en-menu-open.png | English - Mobile menu open |\n`;
  report += `| 03-en-header-scroll.png | English - Header after scroll |\n`;
  report += `| 04-zh-header-normal.png | Chinese homepage - Normal header state |\n`;
  report += `| 05-zh-menu-open.png | Chinese - Mobile menu open |\n`;

  return report;
}

runTests().catch(console.error);
