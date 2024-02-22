import { useAutoAnimate } from '@formkit/auto-animate/react'

import Button from '@/components/Button'
import { useCart } from '@/contexts/CartContext'

import Product from '../Product'
import {
  StyledCard,
  StyledPrice,
  StyledPriceContainer,
  StyledPriceLabel,
  StyledPriceLabelTotal,
  StyledPriceValue,
  StyledPriceValueTotal,
  StyledProductsContainer,
  StyledSection,
} from './styled'

export default function CoffeeSection() {
  const [parent] = useAutoAnimate()

  const { products } = useCart()

  const totalItemsCost = products.reduce((acc, curr) => {
    return (acc + curr.price / 100) * curr.quantity
  }, 0)

  return (
    <StyledSection>
      <>
        <h2>Cafés selecionados</h2>

        <StyledCard>
          <StyledProductsContainer ref={parent}>
            {products?.map((product, i) => (
              <Product key={i} product={product} />
            ))}
          </StyledProductsContainer>

          <StyledPriceContainer>
            <StyledPrice>
              <StyledPriceLabel>Total de itens</StyledPriceLabel>
              <StyledPriceValue>
                {totalItemsCost.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                  maximumFractionDigits: 2,
                })}
              </StyledPriceValue>
            </StyledPrice>
            <StyledPrice>
              <StyledPriceLabel>Entrega</StyledPriceLabel>
              <StyledPriceValue>R$ 10,00</StyledPriceValue>
            </StyledPrice>
            <StyledPrice>
              <StyledPriceLabelTotal>Total</StyledPriceLabelTotal>
              <StyledPriceValueTotal>
                {(totalItemsCost + 10).toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                  maximumFractionDigits: 2,
                })}
              </StyledPriceValueTotal>
            </StyledPrice>
          </StyledPriceContainer>

          <Button type="submit" form="address-form">
            Confirmar pedido
          </Button>
        </StyledCard>
      </>
    </StyledSection>
  )
}
