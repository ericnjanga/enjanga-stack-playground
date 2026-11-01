import type { SortOrderType } from "@/lib/types/products";



type ProductSearchControlsShape = {
  disabled?: boolean;
  searchQueryInput: {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
  sortInput: {
    value: SortOrderType;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  };
};
export const ProductSearchControls = ({ searchQueryInput, sortInput, disabled = false }: ProductSearchControlsShape) => (
    <div>
      <div className="flex flex-wrap -mx-3 mb-8">
        <div className="w-full md:w-2/4 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-xs font-bold mb-2"
            htmlFor="search-input"
          >
            Search
          </label>
          <input
            id="search-input"
            disabled={disabled} className="appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none disabled:cursor-not-allowed disabled:opacity-50" placeholder="Search products..."
            {...searchQueryInput}
          />
        </div>
        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-xs font-bold mb-2"
            htmlFor="sort-input"
          >
            Order by
          </label>
          <div className="relative">
            <select
              id="sort-input"
              disabled={disabled} className="appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none disabled:cursor-not-allowed disabled:opacity-50" {...sortInput}>
              <option value="ASC">ASC</option>
              <option value="DESC">DESC</option>
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
    </div>
  );
