import {
  Coffee,
  Package,
  ShoppingCartSimple,
  Timer,
} from '@phosphor-icons/react'

import CoffeeImage from '../../../../assets/coffee.svg'

import {
  StyledContainer,
  StyledContent,
  StyledListItem,
  StyledSection,
  StyledSectionImage,
} from './styled'

export default function HeroSection() {
  return (
    <StyledSection>
      <StyledContainer>
        <StyledContent>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <ul>
            <StyledListItem $color="yellow-dark">
              <span>
                <ShoppingCartSimple weight="fill" />
              </span>
              Compra simples e segura
            </StyledListItem>

            <StyledListItem $color="base-text">
              <span>
                <Package weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </StyledListItem>

            <StyledListItem $color="yellow">
              <span>
                <Timer weight="fill" />
              </span>
              Entrega rápida e rastreada
            </StyledListItem>

            <StyledListItem $color="purple">
              <span>
                <Coffee weight="fill" />
              </span>
              O café chega fresquinho até você
            </StyledListItem>
          </ul>
        </StyledContent>

        <StyledSectionImage src={CoffeeImage} alt="" />
      </StyledContainer>
    </StyledSection>
  )
}
