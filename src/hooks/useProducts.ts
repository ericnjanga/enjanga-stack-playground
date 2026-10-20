/**
 * Contains data fetching mechanisms and returns an information package useful for status updates and data management:
 * - The payload :is the products array, the total number of products, and the limit of products per page.
 * - The loading status: The current state of the data being fetched, and an accompanying message matching the loading state.
 */


import { useState, useEffect } from "react";
import { fetchJson } from "@/lib/http/fetchJson";
import { ProductsResponseModel, ProductFetchStatusShape, ProductListShape } from "@/lib/types/products";

const API_URL = "https://dummyjson.com/products";



export const useProducts = (): ProductListShape => {
  const status: ProductFetchStatusShape = {
    state: "loading",
    message: "Fetching products...",
  };
  const [data, setData] = useState<ProductListShape>({ status, products: [] });

  useEffect(() => {
    fetchJson<ProductsResponseModel>(API_URL)
    .then((responseData) => {
      setData({
        status: { state: "success", message: "Products fetched successfully." },
        products: [...responseData.products],
      });
    })
    .catch((error: Error) => {
      setData((prevData) => ({
        ...prevData,
        status: { state: "error", message: `Error fetching products: ${error.message}` },
      }));
    });
  }, []);

  return data;
};
