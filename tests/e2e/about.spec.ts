import { expect, test } from "@playwright/test";

test("chapter navigation and pagination stay in sync", async ({ page }) => {
  await page.goto("/about");
  const nav = page.getByRole("navigation", { name: "About me chapters" });
  await expect(nav.getByRole("link", { name: "Introduction" })).toHaveAttribute("aria-current", "page");
  await page.getByRole("navigation", { name: "Chapter pagination" }).getByRole("link", { name: /Next chapter/ }).click();
  await expect(page).toHaveURL(/\/about\/ai-context$/);
  await expect(nav.getByRole("link", { name: "The Context of AI" })).toHaveAttribute("aria-current", "page");
  const ids = await page.locator("[id]").evaluateAll((elements) => elements.map((element) => element.id));
  expect(new Set(ids).size).toBe(ids.length);
  await page.getByRole("navigation", { name: "Chapter pagination" }).getByRole("link", { name: /Next chapter/ }).click();
  await expect(page).toHaveURL(/\/about\/newsletter$/);
  await expect(page.getByRole("heading", { level: 2, name: "Modern UI Architecture Newsletter" })).toBeVisible();
  await page.getByRole("navigation", { name: "Chapter pagination" }).getByRole("link", { name: /Next chapter/ }).click();
  await expect(page).toHaveURL(/\/about\/the-future$/);
  await expect(page.getByRole("navigation", { name: "Chapter pagination" }).getByRole("link", { name: /Read the newsletter/ })).toHaveAttribute("href", "/publications");
});

test("about chapters fit a narrow mobile viewport", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  for (const path of ["/about", "/about/ai-context", "/about/newsletter", "/about/the-future"]) {
    await page.goto(path);
    await expect(page.getByRole("navigation", { name: "About me chapters" })).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(375);
    await expect(page.locator("#chapter-content")).toBeVisible();
  }
});
