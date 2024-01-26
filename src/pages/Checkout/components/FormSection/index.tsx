import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from '@phosphor-icons/react'

import {
  StyledCardHeader,
  StyledForm,
  StyledInputsContainer,
  StyledRadioGroupItem,
  StyledRadioGroupRoot,
  StyledSection,
} from './styled'
import TextInput from '../../../../components/TextInput'
import Card from '../Card'

export default function FormSection() {
  return (
    <StyledSection>
      <h2>Complete seu pedido</h2>

      <StyledForm>
        <Card>
          <StyledCardHeader>
            <MapPin />

            <div>
              <span>Endereço de Entrega</span>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </StyledCardHeader>

          <StyledInputsContainer>
            <TextInput type="text" placeholder="CEP" inputMode="numeric" />
            <TextInput type="text" placeholder="Rua" />
            <TextInput type="text" placeholder="Número" inputMode="numeric" />
            <TextInput type="text" placeholder="Complemento" $optional />
            <TextInput type="text" placeholder="Bairro" />
            <TextInput type="text" placeholder="Cidade" />
            <TextInput type="text" placeholder="UF" maxLength={2} />
          </StyledInputsContainer>
        </Card>

        <Card>
          <StyledCardHeader $iconColor="purple">
            <CurrencyDollar />

            <div>
              <span>Pagamento</span>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </StyledCardHeader>

          <StyledRadioGroupRoot>
            <StyledRadioGroupItem value="credit" id="credit">
              <CreditCard />
              <label htmlFor="credit">Cartão de crédito</label>
            </StyledRadioGroupItem>

            <StyledRadioGroupItem value="debit" id="debit">
              <Bank />
              <label htmlFor="debit">Cartão de débito</label>
            </StyledRadioGroupItem>

            <StyledRadioGroupItem value="money" id="money">
              <Money />
              <label htmlFor="money">Dinheiro</label>
            </StyledRadioGroupItem>
          </StyledRadioGroupRoot>
        </Card>
      </StyledForm>
    </StyledSection>
  )
}
