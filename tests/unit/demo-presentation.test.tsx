import { render, screen, within } from "@testing-library/react";
import { expect, test } from "vitest";
import DemoCard from "@/components/DemoCard";
import HeroDemo from "@/components/HeroDemo";
import { getDemoByRoute } from "@/data/demos";

test("cards identify the available implementations for each demo", () => {
  const learner = getDemoByRoute("/the-learner-app")!;
  const { unmount } = render(<DemoCard demo={learner} />);
  const versions = screen.getByRole("list", { name: "Available code versions" });
  expect(within(versions).getAllByRole("listitem").map((item) => item.textContent)).toEqual(["Vanilla", "React"]);
  unmount();
  render(<DemoCard demo={getDemoByRoute("/react-form-controls")!} />);
  expect(screen.getAllByRole("listitem").map((item) => item.textContent)).toEqual(["React"]);
});

test("planned cards do not claim a code version is available", () => {
  render(<DemoCard demo={getDemoByRoute("/react-shopping-cart-reservation")!} isPlanned />);
  expect(screen.getByText("Coming soon")).toBeInTheDocument();
  expect(screen.queryByRole("list", { name: "Available code versions" })).not.toBeInTheDocument();
});

test("heroes lead with technical content and keep business content in a collapsed disclosure", () => {
  const { container } = render(<HeroDemo title="Demo" description="Technical overview" practicalApplication="Practical application" />);
  expect(screen.getByText("Technical overview")).toBeVisible();
  const disclosure = container.querySelector("details")!;
  expect(disclosure).not.toHaveAttribute("open");
  expect(within(disclosure).getByText("Read the practical application")).toBeInTheDocument();
  expect(within(disclosure).getByText("Practical application")).toBeInTheDocument();
});
