import { expect, test } from "@playwright/test";

test("loads the playground in dark mode", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1, name: "Welcome to the Enjanga Stack Playground" })).toBeVisible();
  await expect(page.locator("html")).toHaveClass(/\bdark\b/);
});

test("opens feature navigation, dismisses it, and follows current demos", async ({ page }) => {
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Feature Demos", exact: true });
  const sidebar = page.getByRole("dialog", { name: "Feature Demos" });
  await trigger.click();
  await expect(sidebar).toBeVisible();
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  await expect(sidebar.getByRole("link", { name: /Product search/ })).toHaveAttribute("href", "/react-product-search");
  await expect(sidebar.locator('[aria-disabled="true"]')).toHaveCount(2);
  await expect(sidebar.getByRole("link")).toHaveCount(1);
  await page.keyboard.press("Escape");
  await expect(sidebar).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await trigger.click();
  await sidebar.getByRole("button", { name: "Close feature demos", exact: true }).click();
  await expect(sidebar).not.toBeVisible();
  await trigger.click();
  await sidebar.getByRole("link", { name: /Product search/ }).click();
  await expect(page).toHaveURL(/\/react-product-search$/);
  await expect(sidebar).not.toBeVisible();
});
