/**
 * Contains mechanisms for:
 * - Rendering product status messages (loading, error, success) and the products list.
 * - Filtering and sorting the products list based on user input.
 */
"use client";
import { useProducts } from "@/hooks/useProducts";

export default function Comp() {
  const { status, products } = useProducts();
  return (
    <div>
      <div className="flex flex-wrap -mx-3 mb-8">
        <div className="w-full md:w-2/4 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-xs font-bold mb-2"
            htmlFor="grid-city"
          >
            Search
          </label>
          <input className="appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none" placeholder="Search products..." />
        </div>
        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-xs font-bold mb-2"
            htmlFor="grid-state"
          >
            Order by
          </label>
          <div className="relative">
            <select className="appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none">
              <option>ASC</option>
              <option>DESC</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p>{status.message}</p>
    </div>
  );
}
