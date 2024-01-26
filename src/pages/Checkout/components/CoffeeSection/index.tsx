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
import Product from '../Product'
import Button from '../../../../components/Button'

export default function CoffeeSection() {
  return (
    <StyledSection>
      <h2>Cafés selecionados</h2>

      <StyledCard>
        <StyledProductsContainer>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </StyledProductsContainer>

        <StyledPriceContainer>
          <StyledPrice>
            <StyledPriceLabel>Total de itens</StyledPriceLabel>
            <StyledPriceValue>R$ 10,00</StyledPriceValue>
          </StyledPrice>
          <StyledPrice>
            <StyledPriceLabel>Entrega</StyledPriceLabel>
            <StyledPriceValue>R$ 10,00</StyledPriceValue>
          </StyledPrice>
          <StyledPrice>
            <StyledPriceLabelTotal>Total</StyledPriceLabelTotal>
            <StyledPriceValueTotal>R$ 10,00</StyledPriceValueTotal>
          </StyledPrice>
        </StyledPriceContainer>

        <Button>Confirmar pedido</Button>
      </StyledCard>
    </StyledSection>
  )
}
