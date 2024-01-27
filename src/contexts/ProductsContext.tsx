import { createContext, useEffect, useReducer } from 'react'
import { productsReducer } from '@/reducers/products/reducer'
import { Product } from '@/@types/product'
import { getProductsAction } from '@/reducers/products/actions'

interface ProductsContextType {
  products: Product[]
}

export const ProductsContext = createContext({} as ProductsContextType)

export const ProductsContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [productsState, dispatch] = useReducer(
    productsReducer,
    { products: [] },
    (state) => {
      return state
    },
  )

  const { products } = productsState

  useEffect(() => {
    dispatch(getProductsAction())
  }, [])

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
}
