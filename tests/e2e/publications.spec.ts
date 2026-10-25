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
