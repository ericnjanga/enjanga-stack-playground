import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.clock.install();
  await page.goto("/react-shopping-cart-reservation");
});

test("adds five products, adjusts quantities, derives totals, and checks out", async ({ page }) => {
  const products = page.getByRole("region", { name: "Products", exact: true });
  const cart = page.getByRole("region", { name: "Shopping cart", exact: true });
  await expect(products.getByRole("button", { name: /^Add .* to cart$/ })).toHaveCount(5);
  await expect(cart.getByRole("button", { name: "Checkout" })).toBeDisabled();
  await products.getByRole("button", { name: "Add Notebook to cart" }).click();
  await products.getByRole("button", { name: "Add Notebook to cart" }).click();
  await expect(cart.getByLabel("Notebook quantity", { exact: true })).toHaveText("2");
  await expect(page.getByTestId("cart-count")).toHaveText("2");
  await expect(page.getByTestId("cart-total")).toHaveText("$24.00");
  await cart.getByRole("button", { name: "Increase Notebook quantity" }).click();
  await cart.getByRole("button", { name: "Decrease Notebook quantity" }).click();
  await products.getByRole("button", { name: "Add Pen set to cart" }).click();
  await expect(page.getByTestId("cart-count")).toHaveText("3");
  await expect(page.getByTestId("cart-total")).toHaveText("$32.50");
  await cart.getByRole("button", { name: "Remove Notebook" }).click();
  await expect(page.getByTestId("cart-total")).toHaveText("$8.50");
  await cart.getByRole("button", { name: "Checkout" }).click();
  await expect(page.getByRole("status")).toHaveText("Checkout successful!");
  await expect(page.getByTestId("cart-count")).toHaveText("0");
  await expect(page.getByTestId("cart-total")).toHaveText("$0.00");
  await page.clock.runFor(121_000);
  await expect(page.getByText("Reservation expired.", { exact: true })).not.toBeVisible();
});

test("expires at two minutes without extending the deadline on new additions", async ({ page }) => {
  await page.getByRole("button", { name: "Add Notebook to cart" }).click();
  await expect(page.getByRole("timer")).toHaveText("2:00");
  await page.clock.runFor(60_000);
  await page.getByRole("button", { name: "Add Coffee mug to cart" }).click();
  await expect(page.getByRole("timer")).toHaveText("1:00");
  await page.clock.runFor(59_000);
  await expect(page.getByRole("timer")).toHaveText("0:01");
  await page.clock.runFor(1_000);
  await expect(page.getByText("Reservation expired.", { exact: true })).toBeVisible();
  await expect(page.getByTestId("cart-count")).toHaveText("0");
  await expect(page.getByTestId("cart-total")).toHaveText("$0.00");
  await expect(page.getByRole("button", { name: "Checkout" })).toBeDisabled();
  await page.getByRole("button", { name: "Add Notebook to cart" }).click();
  await expect(page.getByRole("timer")).toHaveText("2:00");
  await expect(page.getByText("Reservation expired.", { exact: true })).not.toBeVisible();
});

test("removing the last item cancels the reservation and a new item starts fresh", async ({ page }) => {
  await page.getByRole("button", { name: "Add Notebook to cart" }).click();
  await page.clock.runFor(60_000);
  await page.getByRole("button", { name: "Decrease Notebook quantity" }).click();
  await expect(page.getByRole("timer")).not.toBeVisible();
  await page.clock.runFor(61_000);
  await expect(page.getByText("Reservation expired.", { exact: true })).not.toBeVisible();
  await page.getByRole("button", { name: "Add Notebook to cart" }).click();
  await expect(page.getByRole("timer")).toHaveText("2:00");
});
