import { test, expect } from '@playwright/test';

test.describe.parallel('todoMVC automation task - suite',() => {
    test('validate title is todo', async ({ page }) => {
        await page.goto('https://todomvc.com/examples/react/dist/', { waitUntil: 'networkidle' });
        const title = page.locator('h1');
        await expect(title).toHaveText('todos');
    });
});
