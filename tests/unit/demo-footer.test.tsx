import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import DemoFooter from "@/components/DemoFooter";

test("renders each related article with a safe new-tab link", () => {
  const articles = [
    { title: "First article", url: "https://example.com/first" },
    { title: "Second article", url: "https://example.com/second" },
  ];
  render(<DemoFooter articles={articles} />);
  expect(screen.getAllByRole("link")).toHaveLength(2);
  for (const article of articles) {
    const link = screen.getByRole("link", { name: article.title });
    expect(link).toHaveAttribute("href", article.url);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  }
});

for (const articles of [undefined, []]) {
  test(`shows the fallback for ${articles === undefined ? "missing" : "empty"} articles`, () => {
    render(<DemoFooter articles={articles} />);
    expect(screen.getByText("Related articles coming soon.")).toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });
}
