import { ProductsContext } from '@/contexts/ProductsContext'
import { useContext } from 'react'

export const useProducts = () => {
  const { products } = useContext(ProductsContext)

  return { products }
}
