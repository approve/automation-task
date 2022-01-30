import { expect } from '@playwright/test';

export const validateText = async (locator, text) => {
    await expect(locator).toHaveText(text);
}