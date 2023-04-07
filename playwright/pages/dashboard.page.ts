import { Locator, Page, expect } from "@playwright/test";
import { PageBase } from "./page.base";

export class DashboardPage extends PageBase {
  readonly logo: Locator;

  private locators = {
    logo: "a[href*=dashboard]",
    form: {
      income: '[data-test="income"]',
      year: '[data-test="year"]',
      submit: '[data-test="calculate"]',
    },
    total: '[data-test="total"]',
    effectiveRate: '[data-test="effective-rate"]',
    loading: '[data-test="loading"]',
  };

  constructor(page: Page) {
    super(page);
    this.logo = page.locator("a[href*=dashboard]");
  }

  public async navigateToPage(): Promise<void> {
    this.page.goto("./", { waitUntil: "load" });
  }

  public async verifyPageIsLoaded() {
    await this.page.waitForURL("**/dashboard");
    expect(this.page.url()).toContain("dashboard");
    await expect(this.logo).toBeVisible();
  }

  public async verifySubmitForm() {
    const form = {
      income: "200000",
      year: "2022",
    };

    await this.page.locator(this.locators.form.income).type(form.income);
    await this.page.locator(this.locators.form.year).type(form.year);

    await this.page.locator(this.locators.form.submit).click();
    await this.page.waitForSelector(this.locators.loading, { state: "hidden" });

    expect(await this.page.locator(this.locators.total).textContent()).not.toBe(
      "$0.00"
    );
    expect(
      await this.page.locator(this.locators.effectiveRate).textContent()
    ).not.toBe("0.00%");
  }
}
