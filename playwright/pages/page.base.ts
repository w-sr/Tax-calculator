import { Locator, Page } from "@playwright/test";

export abstract class PageBase {
  constructor(protected readonly page: Page) {}

  public getFieldLocator(locator: string): Locator {
    return this.page.locator(locator);
  }

  public abstract navigateToPage(): Promise<void>;
  public abstract verifyPageIsLoaded(): Promise<void>;
}
