import { Trash } from '@phosphor-icons/react'

import ProductCounter from '@/components/ProductCounter'

import {
  StyledActions,
  StyledContent,
  StyledPrice,
  StyledProduct,
  StyledRemoveButton,
  StyledTitle,
} from './styled'

export default function Product() {
  return (
    <StyledProduct className="product-card">
      <img src="/images/coffee/americano.png" alt="" />

      <StyledContent>
        <StyledTitle>Expresso Tradicional</StyledTitle>
        <StyledActions>
          <ProductCounter />
          <StyledRemoveButton>
            <Trash />
            Remover
          </StyledRemoveButton>
        </StyledActions>
      </StyledContent>

      <StyledPrice>R$ 9,00</StyledPrice>
    </StyledProduct>
  )
}
