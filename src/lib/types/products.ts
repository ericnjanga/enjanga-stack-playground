export type ProductDataModel = ProductShape[];
export type ProductsResponseModel = {
  products: ProductDataModel;
  [key: string]: unknown;
};
export type ProductFetchStatusShape = {
  state: PromiseStateType;
  message: string;
};
export type ProductListShape = {
  status: ProductFetchStatusShape;
  products: ProductShape[];
};
export type ProductShape = {
  id: number;
  title: string;
  availabilityStatus: string;
  brand: string;
  category: string;
  description: string;
  [key: string]: unknown;
};
export type SortOrderType = "ASC" | "DESC";
export type PromiseStateType = "loading" | "success" | "error";
