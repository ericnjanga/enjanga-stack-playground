/**
 * Contains mechanisms for:
 * - Rendering product status messages (loading, error, success) and the products list.
 * - Filtering and sorting the products list based on user input.
 */
"use client";
import { useMemo } from "react";
import { useProducts } from "@/hooks/useProducts";
import { useFormSearch, useFormSort } from "@/hooks/useFormInput";
import { ProductSearchControls } from "../ProductSearchControls";
import { List } from "@/components/List";
import Alert from "@/components/Alert";
import type { ProductShape } from "@/lib/types/products";
import type { DemoScenarioType } from "./types";
import type { ProductListShape } from "@/lib/types/products";


const simulatedResults: Record<Exclude<DemoScenarioType, "normal">, ProductListShape> = {
  loading: { status: { state: "loading", message: "Fetching products..." }, products: [] },
  error: { status: { state: "error", message: "Simulated error: unable to fetch products." }, products: [] },
  empty: { status: { state: "success", message: "No products found." }, products: [] },
};

export default function ProductSearch({ scenario = "normal" }: { scenario?: DemoScenarioType }) {
  const liveResult = useProducts();
  // Simulations override the view; real requests remain owned by useProducts.
  const { status, products } = scenario === "normal" ? liveResult : simulatedResults[scenario];
  // Controlling input values for search and sort functionalities using custom hooks.
  const searchInput = useFormSearch('');
  const sortInput = useFormSort('ASC');

  // Computing the new search and filtered products list based on the current search and sort inputs. This is memoized to avoid unnecessary recalculations on every render.
  const processedProducts = useMemo(() => {
    const sortOrder = sortInput.value;
    const searchQuery = searchInput.value.toLowerCase();

    // Filtering products based on the search query...
    const filteredProducts = products.filter((product: ProductShape) => (
      product.title.toLowerCase().includes(searchQuery)
    ));

    // and then sorting them based on the selected sort order...
    return [...filteredProducts].sort((a, b) => {
      if (sortOrder === "ASC") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title)
      }
    });

  }, [products, searchInput.value, sortInput.value]);

  return (
    <div>
      <ProductSearchControls
        disabled={scenario !== "normal"}
        searchQueryInput={searchInput}
        sortInput={sortInput}
      />

      {status.state === "success" ? (
        <List
          data={processedProducts}
          getKey={(product: ProductShape) => product.id}
          renderItem={(product: ProductShape) => (product.title)}
          listClassName="data-table"
        />
      ) : (
        <Alert
          variant={status.state === "loading" ? "info" : "error"}
        >{status.message}</Alert>
      )}
    </div>
  );
}
