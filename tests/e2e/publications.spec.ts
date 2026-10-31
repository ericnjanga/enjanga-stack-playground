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
  const tabs = page.getByRole("navigation", { name: "Publication categories" });
  const list = page.getByRole("region", { name: "Newsletter editions" }).getByRole("list");
  await expect(tabs.getByRole("link", { name: "All", exact: true })).toHaveAttribute("aria-current", "page");
  const cases = [
    ["JavaScript", "javascript"], ["React", "react"], ["Next.js", "nextjs"], ["Others", "others"], ["All", "all"],
  ];
  for (const [label, category] of cases) {
    await tabs.getByRole("link", { name: label, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`filter=${category}$`));
    await expect(tabs.getByRole("link", { name: label, exact: true })).toHaveAttribute("aria-current", "page");
    const expected = publications.filter((article) => category === "all" || (category === "others" ? article.categories.length === 0 : article.categories.includes(category)));
    await expect(list.getByRole("listitem")).toHaveCount(expected.length);
    expect(await list.getByRole("link").evaluateAll((links) => links.map((link) => link.getAttribute("href")))).toEqual(expected.map((article) => article.url));
  }
  await page.goto("/publications?filter=react");
  await page.reload();
  await expect(tabs.getByRole("link", { name: "React", exact: true })).toHaveAttribute("aria-current", "page");
  await tabs.getByRole("link", { name: "JavaScript", exact: true }).click();
  await expect(page).toHaveURL(/filter=javascript$/);
  await page.goBack();
  await expect(page).toHaveURL(/filter=react$/);
  await expect(tabs.getByRole("link", { name: "React", exact: true })).toHaveAttribute("aria-current", "page");
  await page.goto("/publications?filter=unknown");
  await expect(tabs.getByRole("link", { name: "All", exact: true })).toHaveAttribute("aria-current", "page");
  await expect(list.getByRole("listitem")).toHaveCount(publications.length);
});

test("searches titles within categories and keeps search in the URL", async ({ page }) => {
  await page.goto("/publications?filter=javascript");
  const search = page.getByRole("searchbox", { name: "Search by title" });
  const region = page.getByRole("region", { name: "Newsletter editions" });
  const tabs = page.getByRole("navigation", { name: "Publication categories" });
  await search.fill("  EDITORIAL  ");
  const expected = publications.filter((article) => article.categories.includes("javascript") && article.title.toLowerCase().includes("editorial"));
  await expect(region.getByRole("listitem")).toHaveCount(expected.length);
  await expect(page).toHaveURL(/q=/);
  await tabs.getByRole("link", { name: "React", exact: true }).click();
  await expect(search).toHaveValue("  EDITORIAL  ");
  await expect(region.getByRole("listitem")).toHaveCount(publications.filter((article) => article.categories.includes("react") && article.title.toLowerCase().includes("editorial")).length);
  await page.reload();
  await expect(search).toHaveValue("  EDITORIAL  ");
  await search.fill("no matching publication xyz");
  await expect(region.getByRole("listitem")).toHaveCount(0);
  await expect(region.getByText("No publications match your search in this category.")).toBeVisible();
  await search.fill("");
  await expect(region.getByRole("listitem")).toHaveCount(publications.filter((article) => article.categories.includes("react")).length);
  await expect(page).toHaveURL(/filter=react$/);
  await page.goBack();
  await expect(tabs.getByRole("link", { name: "JavaScript", exact: true })).toHaveAttribute("aria-current", "page");
  await expect(search).toHaveValue("  EDITORIAL  ");
});
