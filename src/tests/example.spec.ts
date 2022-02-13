import { test, expect } from '@playwright/test';

test.describe('todoMVC automation task - suite',() => {
    
    test('validate title', async ({ page }) => {
        await page.goto('https://todomvc.com/examples/react/#/', { waitUntil: 'networkidle' });
        const title = page.locator('section.todoapp >> h1');
        await expect(title).toHaveText('todos');
    });
});
