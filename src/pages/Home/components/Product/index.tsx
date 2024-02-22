import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'

import type { Product } from '@/@types/product'
import { useCart } from '@/contexts/CartContext'

import {
  StyledActionsContainer,
  StyledBuyButton,
  StyledCounter,
  StyledDescription,
  StyledPrice,
  StyledProduct,
  StyledProductImage,
  StyledTag,
  StyledTagsContainer,
  StyledTitle,
} from './styled'

interface ProductProps {
  product: Product
}

export default function Product({ product }: ProductProps) {
  const navigate = useNavigate()
  const { products, addNewProduct, removeOneProduct } = useCart()

  const inCart = products.find(
    (productToFind) => productToFind.id === product.id,
  )?.quantity

  function handleNavigateCart() {
    navigate('/checkout')
  }

  function handleAddProduct() {
    addNewProduct(product)
  }

  function handleRemoveOneProduct() {
    removeOneProduct(product.id)
  }

  return (
    <StyledProduct>
      <StyledProductImage src={product.imageUrl} alt="" />

      <StyledTagsContainer>
        {product.tags.map((tag) => (
          <StyledTag key={tag}>{tag}</StyledTag>
        ))}
      </StyledTagsContainer>

      <StyledTitle>{product.name}</StyledTitle>

      <StyledDescription>{product.description}</StyledDescription>

      <StyledActionsContainer>
        <StyledPrice>
          R${' '}
          <span>
            {(product.price / 100).toLocaleString('pt-br', {
              currency: 'BRL',
            })}
          </span>
        </StyledPrice>

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

        <StyledBuyButton
          disabled={!inCart || inCart <= 0}
          onClick={handleNavigateCart}
        >
          <ShoppingCartSimple weight="fill" />
        </StyledBuyButton>
      </StyledActionsContainer>
    </StyledProduct>
  )
}
