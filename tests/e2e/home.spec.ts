import { expect, test } from "@playwright/test";

test("loads the playground in dark mode", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1, name: "Welcome to the Enjanga Stack Playground" })).toBeVisible();
  await expect(page.locator("html")).toHaveClass(/\bdark\b/);
});
