import { test } from '@playwright/test';
import * as actions from '../actions/example';
import * as validations from '../validations/example';

test.describe('todoMVC automation task - suite',() => {

    test.beforeAll(async ({ page }) => {
        await actions.goToUrl('https://todomvc.com/examples/react/#/', page);
    });

    test('validate title', async ({ page }) => {
        const title = page.locator('section.todoapp >> h1');
        await validations.validateText(title, 'todos');
    });
});
