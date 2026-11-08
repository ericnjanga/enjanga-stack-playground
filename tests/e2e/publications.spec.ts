import { expect, test } from "@playwright/test";
import publications from "../../src/data/publications.json";

test("lists all newsletter editions as external links", async ({ page }) => {
  await page.goto("/publications");
  await expect(page.getByRole("heading", { level: 1, name: "Publications" })).toBeVisible();
  const list = page.getByRole("region", { name: "Newsletter editions" });
  await expect(list.getByRole("listitem")).toHaveCount(publications.length);
  expect(new Set(publications.map((article) => article.url)).size).toBe(publications.length);
  for (const article of publications) {
    const link = list.getByRole("link", { name: `${article.title} (opens in a new tab)`, exact: true });
    await expect(link).toHaveAttribute("href", article.url);
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
  }
  await expect(page.getByRole("navigation", { name: "Footer navigation" }).getByRole("link", { name: "Publications" })).toHaveAttribute("href", "/publications");
});

test("filters publications through shareable category URLs and preserves order", async ({ page }) => {
  await page.goto("/publications");
  const tabs = page.getByRole("combobox", { name: "Publication category" });
  const list = page.getByRole("region", { name: "Newsletter editions" }).getByRole("list");
  await expect(tabs).toHaveValue("all");
  const cases = [
    ["JavaScript", "javascript"], ["TypeScript", "typescript"], ["React", "react"], ["Next.js", "nextjs"], ["Others", "others"], ["All", "all"],
  ];
  for (const [, category] of cases) {
    await tabs.selectOption(category);
    await expect(page).toHaveURL(new RegExp(`filter=${category}$`));
    await expect(tabs).toHaveValue(category);
    const expected = publications.filter((article) => category === "all" || (category === "others" ? article.categories.length === 0 : article.categories.includes(category)));
    await expect(list.getByRole("listitem")).toHaveCount(expected.length);
    expect(await list.getByRole("link").evaluateAll((links) => links.map((link) => link.getAttribute("href")))).toEqual(expected.map((article) => article.url));
  }
  await page.goto("/publications?filter=react");
  await page.reload();
  await expect(tabs).toHaveValue("react");
  await tabs.selectOption("javascript");
  await expect(page).toHaveURL(/filter=javascript$/);
  await page.goBack();
  await expect(page).toHaveURL(/filter=react$/);
  await expect(tabs).toHaveValue("react");
  await page.goto("/publications?filter=unknown");
  await expect(tabs).toHaveValue("all");
  await expect(list.getByRole("listitem")).toHaveCount(publications.length);
});

test("searches titles within categories and keeps search in the URL", async ({ page }) => {
  await page.goto("/publications?filter=javascript");
  const search = page.getByRole("searchbox", { name: "Search by title" });
  const region = page.getByRole("region", { name: "Newsletter editions" });
  const tabs = page.getByRole("combobox", { name: "Publication category" });
  await search.fill("  EDITORIAL  ");
  const expected = publications.filter((article) => article.categories.includes("javascript") && article.title.toLowerCase().includes("editorial"));
  await expect(region.getByRole("listitem")).toHaveCount(expected.length);
  await expect(page).toHaveURL(/q=/);
  await tabs.selectOption("react");
  await expect(search).toHaveValue("  EDITORIAL  ");
  await expect(region.getByRole("listitem")).toHaveCount(publications.filter((article) => article.categories.includes("react") && article.title.toLowerCase().includes("editorial")).length);
  await page.reload();
  await expect(search).toHaveValue("  EDITORIAL  ");
  await search.fill("no matching publication xyz");
  await expect(region.getByRole("listitem")).toHaveCount(0);
  await expect(region.getByText("No publications match your selected filters.")).toBeVisible();
  await search.fill("");
  await expect(region.getByRole("listitem")).toHaveCount(publications.filter((article) => article.categories.includes("react")).length);
  await expect(page).toHaveURL(/filter=react$/);
  await page.goBack();
  await expect(tabs).toHaveValue("javascript");
  await expect(search).toHaveValue("  EDITORIAL  ");
});


test("TypeScript category supports direct links and title search", async ({ page }) => {
  await page.goto("/publications?filter=typescript&q=practical");
  await expect(page.getByRole("combobox", { name: "Publication category" })).toHaveValue("typescript");
  const search = page.getByRole("searchbox", { name: "Search by title" });
  await expect(search).toHaveAttribute("placeholder", "Search TypeScript publications…");
  await expect(search).toHaveValue("practical");
  const region = page.getByRole("region", { name: "Newsletter editions" });
  await expect(region.getByRole("listitem")).toHaveCount(1);
  await expect(region.getByRole("link", { name: /Fast-Paced TypeScript/ })).toBeVisible();
  await page.reload();
  await expect(search).toHaveValue("practical");
  await search.fill("no matching title");
  await expect(region.getByRole("listitem")).toHaveCount(0);
  await search.fill("");
  await expect(region.getByRole("listitem")).toHaveCount(publications.filter((article) => article.categories.includes("typescript")).length);
});


test("topic pills combine with category and search and can be toggled off", async ({ page }) => {
  await page.goto("/publications?filter=react");
  const pill = page.getByRole("button", { name: "Component Rendering", exact: true });
  await pill.click();
  await expect(pill).toHaveAttribute("aria-pressed", "true");
  const expected = publications.filter((article) => article.categories.includes("react") && article.tags.includes("component-rendering"));
  const region = page.getByRole("region", { name: "Newsletter editions" });
  await expect(region.getByRole("listitem")).toHaveCount(expected.length);
  await page.getByRole("searchbox").fill("hydration");
  await expect(region.getByRole("listitem")).toHaveCount(1);
  await page.reload();
  await expect(pill).toHaveAttribute("aria-pressed", "true");
  await page.getByRole("combobox").selectOption("javascript");
  await expect(pill).toHaveAttribute("aria-pressed", "true");
  await expect(region.getByRole("listitem")).toHaveCount(0);
  await page.getByRole("searchbox").fill("");
  await pill.click();
  await expect(pill).toHaveAttribute("aria-pressed", "false");
  await expect(region.getByRole("listitem")).toHaveCount(publications.filter((article) => article.categories.includes("javascript")).length);
  await page.getByRole("button", { name: "Asynchronous Programming", exact: true }).click();
  await expect(region.getByRole("listitem")).toHaveCount(publications.filter((article) => article.categories.includes("javascript") && article.tags.includes("asynchronous-programming")).length);
  await page.goto("/publications?tag=editorial-vision");
  await expect(region.getByRole("listitem")).toHaveCount(publications.filter((article) => article.tags.includes("editorial-vision")).length);
});

test("category selector stays to the right of search on mobile", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/publications");
  const search = await page.getByRole("searchbox").boundingBox();
  const category = await page.getByRole("combobox").boundingBox();
  expect(search).not.toBeNull();
  expect(category).not.toBeNull();
  expect(category!.x).toBeGreaterThanOrEqual(search!.x + search!.width);
  expect(category!.y).toBe(search!.y);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(375);
});

test("clear filters pill resets all filters and returns focus to search", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/publications?filter=react&tag=component-rendering&q=hydration");
  const search = page.getByRole("searchbox");
  const clear = page.getByRole("button", { name: "Clear filters", exact: true });
  const category = page.getByRole("combobox");
  const clearBox = await clear.boundingBox();
  const categoryBox = await category.boundingBox();
  expect(clearBox!.x + clearBox!.width).toBeLessThanOrEqual(categoryBox!.x);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(375);
  await clear.click();
  await expect(search).toHaveValue("");
  await expect(search).toBeFocused();
  await expect(category).toHaveValue("all");
  await expect(page.getByRole("button", { name: "Component Rendering", exact: true })).toHaveAttribute("aria-pressed", "false");
  await expect(page.getByRole("region", { name: "Newsletter editions" }).getByRole("listitem")).toHaveCount(publications.length);
  await expect(clear).toHaveCount(0);
  await page.goBack();
  await expect(search).toHaveValue("hydration");
  await expect(clear).toBeVisible();
});
