import { expect, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 10000,
  workers: 1,
  reporter: "list",
  use: {
    browserName: 'chromium',
    channel: 'chrome',
    viewport: { width: 1920, height: 969 },
    launchOptions: {
      slowMo: 5000,
      args: ['--disable-dev-shm-usage']
    }
  },
  projects: [
      {
          name: "example",
          testMatch: "example.spec.ts"
      }
  ],
};

export default config;