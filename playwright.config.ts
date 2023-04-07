/* eslint-disable no-process-env */
// playwright.config.ts
import { devices, type PlaywrightTestConfig } from "@playwright/test";
require("dotenv").config();

const config: PlaywrightTestConfig = {
  globalSetup: require.resolve("./playwright/global-setup"),
  timeout: 60 * 1000,
  expect: {
    timeout: 10 * 1000,
  },
  fullyParallel: true,
  use: {
    viewport: { width: 1440, height: 764 },
    trace: "on-first-retry",
    video: { mode: "on" },
    baseURL: process.env["E2E_BASE_URL"] as string,
  },
  testDir: "./playwright/integration",
  testMatch: /.*.e2e.spec.ts/,
  workers: 1,
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
  reportSlowTests: { max: 0, threshold: 60001 },
};
export default config;
