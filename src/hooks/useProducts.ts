import { useState, useEffect } from "react";
import { fetchJson } from "@/lib/http/fetchJson";
import { PRODUCTS_API_URL } from "@/constants";
import type { ProductsResponseModel, ProductFetchStatusShape, ProductListShape } from "@/lib/types/products";



/**
 * Fetches products from the API when the consuming component mounts.
 * Starts with an empty product list and a loading status, then updates the
 * status to success or error when the request settles.
 *
 * Returns only the products and a status message; API pagination metadata
 * such as total, skip, and limit is not included.
 * Cancels the request during effect cleanup and ignores results from
 * cancelled requests. Each mounted consumer manages its own request and state.
 *
 * @returns The product list and its loading, success, or error status.
 */
export const useProducts = (): ProductListShape => {
  const status: ProductFetchStatusShape = {
    state: "loading",
    message: "Fetching products...",
  };
  const [data, setData] = useState<ProductListShape>({ status, products: [] });

  useEffect(() => {
    const controller = new AbortController();

    fetchJson<ProductsResponseModel>(PRODUCTS_API_URL, {
      signal: controller.signal,
    })
    .then((responseData) => {
      // Ignore a result if cleanup has already cancelled this request.
      if (controller.signal.aborted) return;

      setData({
        status: { state: "success", message: "Products fetched successfully." },
        products: [...responseData.products],
      });
    })
    .catch((error: unknown) => {
      // Cancellation is expected during cleanup and should not display an error.
      if (controller.signal.aborted) return;

      const message = error instanceof Error ? error.message : 'Unknown error';

      setData((prevData) => ({
        ...prevData,
        status: { state: "error", message: `Error fetching products: ${message}` },
      }));
    });

    // Abort this effect's request on unmount or before React reruns the effect.
    // The guards above prevent its completion handlers from updating state.
    return () => {
      controller.abort();
    };
  }, []);

  return data;
};
