import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Home from "@/app/page";

test("shows the playground homepage", () => {
  render(<Home />);
  expect(screen.getByRole("heading", { level: 1, name: "Welcome to the Enjanga Stack Playground." })).toBeInTheDocument();
});
