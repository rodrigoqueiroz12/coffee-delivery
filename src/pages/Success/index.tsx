import { Clock, CurrencyDollar, MapPin } from '@phosphor-icons/react'
import { Navigate, useSearchParams } from 'react-router-dom'

import GuyPicture from '@/assets/guy.svg'

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

type SuccessParams =
  | {
      postalCode: string
      street: string
      number: string
      complement: string
      neighborhood: string
      city: string
      state: string
      paymentMethod: 'credit' | 'debit' | 'money'
    }
  | Record<string, never>

export default function Success() {
  const [searchParams] = useSearchParams()
  const purchase: SuccessParams = JSON.parse(
    searchParams.get('purchase') || '{}',
  )

  if (!purchase.paymentMethod) {
    return <Navigate to="/" />
  }

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
                    Entrega em{' '}
                    <strong>
                      {purchase.street}, {purchase.number}
                    </strong>
                  </span>
                  <span>
                    {purchase.neighborhood} - {purchase.city}, {purchase.state}
                  </span>
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
                    {purchase.paymentMethod === 'credit' && (
                      <strong>Cartão de crédito</strong>
                    )}

                    {purchase.paymentMethod === 'debit' && (
                      <strong>Cartão de débito</strong>
                    )}

                    {purchase.paymentMethod === 'money' && (
                      <strong>Dinheiro</strong>
                    )}
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
