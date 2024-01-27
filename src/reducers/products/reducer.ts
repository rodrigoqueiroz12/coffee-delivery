import { produce } from 'immer'

import { ProductActionTypes } from './actions'

import { Product } from '@/@types/product'
import { products } from '@/data/products'

interface ProductsState {
  products: Product[]
}

interface ProductsAction {
  type: ProductActionTypes
}

export function productsReducer(state: ProductsState, action: ProductsAction) {
  switch (action.type) {
    case ProductActionTypes.GET_PRODUCTS: {
      return produce(state, (draft) => {
        draft.products = products
      })
    }
    default: {
      return state
    }
  }
}
