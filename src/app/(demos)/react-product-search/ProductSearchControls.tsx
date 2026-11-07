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
      <div className="mb-6 grid gap-5 sm:grid-cols-[minmax(0,1fr)_minmax(10rem,0.4fr)]">
        <div className="min-w-0">
          <label
            className="block uppercase tracking-wide text-xs font-bold mb-2"
            htmlFor="search-input"
          >
            Search
          </label>
          <input
            type="search"
            id="search-input"
            disabled={disabled} className="form-control" placeholder="Search products..."
            {...searchQueryInput}
          />
        </div>
        <div className="min-w-0">
          <label
            className="block uppercase tracking-wide text-xs font-bold mb-2"
            htmlFor="sort-input"
          >
            Order by
          </label>
          <div className="relative">
            <select
              id="sort-input"
              disabled={disabled} className="form-control appearance-none pr-9" {...sortInput}>
              <option value="ASC">ASC</option>
              <option value="DESC">DESC</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
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
