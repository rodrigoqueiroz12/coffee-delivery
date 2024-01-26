import { ShoppingCartSimple } from '@phosphor-icons/react'

import {
  StyledActionsContainer,
  StyledBuyButton,
  StyledDescription,
  StyledPrice,
  StyledProduct,
  StyledProductImage,
  StyledTag,
  StyledTagsContainer,
  StyledTitle,
} from './styled'
import { ProductType } from '@/@types/product'
import { format } from '@/lib/utils'
import ProductCounter from '@/components/ProductCounter'

interface ProductProps {
  product: ProductType
}

export default function Product({ product }: ProductProps) {
  const formattedPrice = format(product.price / 100)

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
          R$ <span>{formattedPrice}</span>
        </StyledPrice>

        <ProductCounter />

        <StyledBuyButton>
          <ShoppingCartSimple weight="fill" />
        </StyledBuyButton>
      </StyledActionsContainer>
    </StyledProduct>
  )
}
