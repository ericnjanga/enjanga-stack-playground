import { expect, test } from "@playwright/test";

test("switches simulation states and restores real results", async ({ page }) => {
  await page.route("https://dummyjson.com/products", (route) => route.fulfill({
    json: { products: [{ id: 1, title: "Test product" }] },
  }));
  await page.goto("/react-product-search");
  const selector = page.getByRole("combobox", { name: "Simulation state" });
  await expect(page.getByText("Test product", { exact: true })).toBeVisible();
  const search = page.getByPlaceholder("Search products...");
  const sort = page.getByRole("combobox", { name: "Order by" });
  await expect(search).toBeEnabled();
  await expect(sort).toBeEnabled();
  await selector.selectOption("error");
  await expect(search).toBeDisabled();
  await expect(sort).toBeDisabled();
  await expect(selector).toBeEnabled();
  await expect(page.getByRole("main").getByRole("alert")).toHaveText("Simulated error: unable to fetch products.");
  await expect(page.getByText("Test product", { exact: true })).not.toBeVisible();
  await selector.selectOption("loading");
  await expect(search).toBeDisabled();
  await expect(sort).toBeDisabled();
  await expect(page.getByRole("main").getByRole("status")).toHaveText("Fetching products...");
  await selector.selectOption("empty");
  await expect(search).toBeDisabled();
  await expect(sort).toBeDisabled();
  await expect(page.getByText("The list is empty.")).toBeVisible();
  await selector.selectOption("normal");
  await expect(search).toBeEnabled();
  await expect(sort).toBeEnabled();
  await expect(page.getByText("Test product", { exact: true })).toBeVisible();
});
