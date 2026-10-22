import { expect, test } from "@playwright/test";
import { current, planned } from "../../src/data/demos";

test("loads the playground in dark mode", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1, name: "Welcome to the Enjanga Stack Playground." })).toBeVisible();
  await expect(page.locator("html")).toHaveClass(/\bdark\b/);
  const footer = page.getByRole("contentinfo");
  await expect(footer).toContainText("Eric Njanga. All rights reserved.");
  await expect(footer.getByRole("link", { name: "enjanga.com" })).toHaveAttribute("href", "https://enjanga.com");
  await expect(footer.getByRole("link", { name: "GitHub repository" })).toHaveAttribute("href", "https://github.com/ericnjanga/enjanga-stack-playground");
});

test("opens feature navigation, dismisses it, and follows current demos", async ({ page }) => {
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Feature Demos", exact: true });
  const sidebar = page.getByRole("dialog", { name: "Feature Demos" });
  await trigger.click();
  await expect(sidebar).toBeVisible();
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  await expect(sidebar.getByRole("link", { name: /Product search/ })).toHaveAttribute("href", "/react-product-search");
  await expect(sidebar.locator('[aria-disabled="true"]')).toHaveCount(planned.length);
  await expect(sidebar.getByRole("link")).toHaveCount(current.length);
  await expect(sidebar.locator('[aria-current="page"]')).toHaveCount(0);
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


test("marks the current demo active on direct visits and browser navigation", async ({ page }) => {
  await page.goto("/react-product-search");
  const trigger = page.getByRole("button", { name: "Feature Demos", exact: true });
  const sidebar = page.getByRole("dialog", { name: "Feature Demos" });
  await trigger.click();
  await expect(sidebar.getByRole("link", { name: /Product search/ })).toHaveAttribute("aria-current", "page");
  await page.keyboard.press("Escape");
  await page.getByRole("link", { name: "Enjanga Stack Playground", exact: true }).click();
  await trigger.click();
  await expect(sidebar.locator('[aria-current="page"]')).toHaveCount(0);
  await page.keyboard.press("Escape");
  await page.goBack();
  await trigger.click();
  await expect(sidebar.getByRole("link", { name: /Product search/ })).toHaveAttribute("aria-current", "page");
});
