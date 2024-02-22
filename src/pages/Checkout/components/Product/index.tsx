import { Minus, Plus, Trash } from '@phosphor-icons/react'

import type { Product as ProductType } from '@/@types/product'
import { useCart } from '@/contexts/CartContext'
import { StyledCounter } from '@/pages/Home/components/Product/styled'

import {
  StyledActions,
  StyledContent,
  StyledPrice,
  StyledProduct,
  StyledRemoveButton,
  StyledTitle,
} from './styled'

interface ProductProps {
  product: ProductType
}

export default function Product({ product }: ProductProps) {
  const { products, addNewProduct, removeOneProduct, removeProduct } = useCart()

  const inCart = products.find(
    (productToFind) => productToFind.id === product.id,
  )?.quantity

  function handleAddProduct() {
    addNewProduct(product)
  }

  function handleRemoveOneProduct() {
    removeOneProduct(product.id)
  }

  function handleRemoveProductFromCart() {
    removeProduct(product.id)
  }

  return (
    <StyledProduct className="product-card">
      <img src={product.imageUrl} alt="" />

      <StyledContent>
        <StyledTitle>{product.name}</StyledTitle>
        <StyledActions>
          <StyledCounter>
            <button
              type="button"
              onClick={handleRemoveOneProduct}
              disabled={!inCart || inCart <= 0}
            >
              <Minus weight="bold" />
            </button>
            <span>{inCart || 0}</span>
            <button type="button" onClick={handleAddProduct}>
              <Plus weight="bold" />
            </button>
          </StyledCounter>

          <StyledRemoveButton onClick={handleRemoveProductFromCart}>
            <Trash />
            Remover
          </StyledRemoveButton>
        </StyledActions>
      </StyledContent>

      <StyledPrice>
        {(product.price / 100).toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
          maximumFractionDigits: 2,
        })}
      </StyledPrice>
    </StyledProduct>
  )
}
