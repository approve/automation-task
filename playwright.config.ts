import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/playwright-tests',
  fullyParallel: true,
  retries: 0,
  workers: 1,
  reporter: 'list',
  projects: [
    {
      name: 'example',
    }
  ]
});
