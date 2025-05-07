const { test, expect } = require('@playwright/test');

test('kiểm tra tên ',async({page}) =>{
await page.goto('https://example.com')
await expect.toHaveTitle('Example Domain');
})