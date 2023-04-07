import { chromium, FullConfig } from "@playwright/test";

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(`${config.projects[0].use.baseURL}/`, {
    waitUntil: "load",
  });
  await browser.close();
}

export default globalSetup;
