import { expect, test } from "@playwright/test";

test("pages share one main landmark and fit a narrow viewport", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.route("https://dummyjson.com/products", (route) => route.fulfill({ json: { products: [] } }));
  for (const path of ["/", "/about", "/publications", "/react-counter", "/react-form-controls", "/react-product-search", "/the-learner-app", "/react-shopping-cart-reservation"]) {
    await page.goto(path);
    await expect(page.getByRole("main")).toHaveCount(1);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    expect(await page.evaluate(() => document.documentElement.scrollWidth), path).toBeLessThanOrEqual(375);
  }
});

test("skip link and active navigation follow the current page", async ({ page }) => {
  await page.goto("/publications");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content", exact: true })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("main")).toBeFocused();
  await expect(page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "Publications" })).toHaveAttribute("aria-current", "page");
  await page.goto("/about/newsletter");
  await expect(page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "About", exact: true })).toHaveAttribute("aria-current", "page");
});

test("clearing publication filters restores the complete archive", async ({ page }) => {
  await page.goto("/publications?filter=react&tag=component-rendering&q=hydration");
  await page.getByRole("button", { name: "Clear filters", exact: true }).click();
  await expect(page).toHaveURL(/\/publications$/);
  await expect(page.getByRole("searchbox")).toHaveValue("");
  await expect(page.getByRole("combobox")).toHaveValue("all");
  await expect(page.getByRole("button", { name: "Component Rendering", exact: true })).toHaveAttribute("aria-pressed", "false");
});
