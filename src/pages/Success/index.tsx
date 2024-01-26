import { Clock, CurrencyDollar, MapPin } from '@phosphor-icons/react'

import GuyPicture from '../../assets/guy.svg'

import {
  StyledContainer,
  StyledContent,
  StyledContentContainer,
  StyledIcon,
  StyledImage,
  StyledItemsList,
  StyledListItem,
  StyledListItemContent,
  StyledSection,
} from './styled'

export default function Success() {
  return (
    <StyledContainer>
      <StyledSection>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <StyledContentContainer>
          <StyledContent>
            <StyledItemsList>
              <StyledListItem>
                <StyledIcon $color="purple">
                  <MapPin weight="fill" />
                </StyledIcon>
                <StyledListItemContent>
                  <span>
                    Entrega em <strong>Rua João Martinelli, 102</strong>
                  </span>
                  <span>Farrapos - Porto Alegre, RS</span>
                </StyledListItemContent>
              </StyledListItem>
              <StyledListItem>
                <StyledIcon>
                  <Clock weight="fill" />
                </StyledIcon>
                <StyledListItemContent>
                  <span>Previsão de entrega</span>
                  <span>20 min - 30 min</span>
                </StyledListItemContent>
              </StyledListItem>
              <StyledListItem>
                <StyledIcon $color="yellow-dark">
                  <CurrencyDollar weight="fill" />
                </StyledIcon>
                <StyledListItemContent>
                  <span>Pagamento na entrega</span>
                  <span>
                    <strong>Cartão de crédito</strong>
                  </span>
                </StyledListItemContent>
              </StyledListItem>
            </StyledItemsList>
          </StyledContent>
        </StyledContentContainer>
      </StyledSection>

      <StyledImage src={GuyPicture} alt="" />
    </StyledContainer>
  )
}
