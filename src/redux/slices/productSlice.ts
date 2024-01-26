import { createSlice } from '@reduxjs/toolkit'

import { products } from '@/data/products'
import { Product } from '@/@types/product'

interface ProductsState {
  products: Product[]
}

const initialState: ProductsState = {
  products: [],
}

export const productSlice = createSlice({
  name: 'products',

  initialState,

  reducers: {
    getProducts: (state) => {
      state.products = products
    },
  },
})

export const { getProducts } = productSlice.actions

export default productSlice.reducer
