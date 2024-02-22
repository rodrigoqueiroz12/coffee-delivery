import { produce } from 'immer'
import { createContext, useContext, useState } from 'react'

import { Product } from '@/@types/product'

interface CartProducts extends Product {
  quantity: number
}

interface CartContextProps {
  products: CartProducts[]
  addNewProduct: (product: Product) => void
  removeOneProduct: (productId: string) => void
  removeProduct: (productId: string) => void
}

const CartContext = createContext<CartContextProps>({
  products: [],
  addNewProduct: () => {},
  removeOneProduct: () => {},
  removeProduct: () => {},
})

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<CartProducts[]>([])

  function addNewProduct(product: Product) {
    const productIndex = products.findIndex(
      (productToFind) => productToFind.id === product.id,
    )

    if (productIndex > -1) {
      const newState = produce(products, (draft) => {
        draft[productIndex].quantity++
      })

      setProducts(newState)
    } else {
      const newState = produce(products, (draft) => {
        draft.push({
          ...product,
          quantity: 1,
        })
      })

      setProducts(newState)
    }
  }

  function removeOneProduct(productId: string) {
    const productIndex = products.findIndex(
      (product) => product.id === productId,
    )

    if (productIndex > -1) {
      const newState = produce(products, (draft) => {
        if (draft[productIndex].quantity <= 1) {
          draft.splice(productIndex, 1)
        } else {
          draft[productIndex].quantity--
        }
      })

      setProducts(newState)
    }
  }

  function removeProduct(productId: string) {
    const productIndex = products.findIndex(
      (product) => product.id === productId,
    )

    if (productIndex > -1) {
      const newState = produce(products, (draft) => {
        draft.splice(productIndex, 1)
      })

      setProducts(newState)
    }
  }

  return (
    <CartContext.Provider
      value={{ products, addNewProduct, removeOneProduct, removeProduct }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('Context not provided')
  }

  return { ...context }
}
