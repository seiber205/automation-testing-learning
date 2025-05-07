const { test, expect } = require('@playwright/test');

test('Kiểm tra tiêu đề Google', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle('Google');
});