import { test, expect } from '@playwright/test';

test.skip('should be able to mark all tasks as completed', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    const TODO_ITEMS = [
        'buy some cheese',
        'feed the cat',
        'book a doctors appointment'
    ] as const;

    const newTodoInput = page.locator('input');
    const toggleAllInput = await page.locator('input#toggle-all');
    let allTodos = page.getByTestId('todo-item');

    for (let item of TODO_ITEMS) {
        newTodoInput.fill(item);
        newTodoInput.press('Enter');
    }

    await toggleAllInput.check();
    const errorText = 'found some todo items without "completed" class after marking all as completed!';
    await expect(allTodos, errorText).toHaveClass(['completed', 'completed', 'completed', 'completed']);
    await toggleAllInput.uncheck();
    await expect(allTodos).toHaveClass(['toBeCompleted', 'toBeCompleted', 'toBeCompleted', 'toBeCompleted']);
    await toggleAllInput.check();
    expect( toggleAllInput.isChecked()).toBe(true);
});

