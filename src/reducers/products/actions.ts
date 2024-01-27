export enum ProductActionTypes {
  GET_PRODUCTS = 'GET_PRODUCTS',
}

export function getProductsAction() {
  return {
    type: ProductActionTypes.GET_PRODUCTS,
  }
}
