import { test } from "../baseFixtures";
import { DashboardPage } from "../pages/dashboard.page";

test.describe("Dashboard", () => {
  test("verify page is loaded", async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.navigateToPage();
    await dashboardPage.verifyPageIsLoaded();

    await dashboardPage.verifySubmitForm();
  });
});
