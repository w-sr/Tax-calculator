import { test as baseTest } from "@playwright/test";

export const test = baseTest.extend({
  context: async ({ context }, use) => {
    await use(context);
  },
});

export const expect = test.expect;
