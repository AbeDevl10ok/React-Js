import { test, expect } from "@playwright/test";

test.describe("Render Correct", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("http:/localhost:5173/");
  });
  test("show title", async ({ page }) => {
    const locator = page.locator("//h1");
    await expect(locator).toHaveText(/shoping cart/i);
  });

  test("show inputs", async ({ page }) => {
    const inputPrice = page.getByRole("slider", { name: /price/i });
    await expect(inputPrice).toBeVisible();
    const inputCategory = page.locator("//select");
    await expect(inputCategory).toBeVisible();
  });

  test("shoe products", async ({ page }) => {

    //se renderiza la lista
    await expect(page.locator("//main[@class='products']//ul")).toBeVisible();
    //contiene imagenes
    const products = await page.locator("//img").all();
    expect(products?.length).toBeGreaterThan(0)

  });

});
