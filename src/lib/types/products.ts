type ProductDataModel = Record<string, unknown>[];
export type ProductsResponseModel = {
  products: ProductDataModel;
  [key: string]: unknown;
};
export type ProductFetchStatusShape = {
  state: string;
  message: string;
};
export type ProductListShape = {
  status: ProductFetchStatusShape;
  products: ProductDataModel;
};
