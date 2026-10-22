/**
 * Contains data fetching mechanisms and returns an information package useful for status updates and data management:
 * - The payload :is the products array, the total number of products, and the limit of products per page.
 * - The loading status: The current state of the data being fetched, and an accompanying message matching the loading state.
 */


import { useState, useEffect } from "react";
import { fetchJson } from "@/lib/http/fetchJson";
import type { ProductsResponseModel, ProductFetchStatusShape, ProductListShape } from "@/lib/types/products";

const API_URL = "https://dummyjson.com/products";



export const useProducts = (): ProductListShape => {
  const status: ProductFetchStatusShape = {
    state: "loading",
    message: "Fetching products...",
  };
  const [data, setData] = useState<ProductListShape>({ status, products: [] });

  useEffect(() => {
    const controller = new AbortController();

    fetchJson<ProductsResponseModel>(API_URL, {
      signal: controller.signal,
    })
    .then((responseData) => {
      if (controller.signal.aborted) return;

      setData({
        status: { state: "success", message: "Products fetched successfully." },
        products: [...responseData.products],
      });
    })
    .catch((error: unknown) => {
      // Cancellation is expected during cleanup.
      if (controller.signal.aborted) return;

      const message = error instanceof Error ? error.message : 'Unknown error';

      setData((prevData) => ({
        ...prevData,
        status: { state: "error", message: `Error fetching products: ${message}` },
      }));
    });

    // Request cleanup:
    // Cleanup cancelling the request when the component unmounts or before the effect runs again.
    // This prevent an obsolete request from updating state or displaying cancellation as an error.
    return () => {
      controller.abort();
    };
  }, []);

  return data;
};
