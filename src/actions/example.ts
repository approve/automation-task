import { Page } from '@playwright/test';

export const goToUrl = async (url, page: Page) => {
    await page.goto(url);
}
