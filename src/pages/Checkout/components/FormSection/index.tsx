import { zodResolver } from '@hookform/resolvers/zod'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from '@phosphor-icons/react'
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import TextInput from '@/components/TextInput'

import Card from '../Card'
import {
  StyledCardHeader,
  StyledForm,
  StyledInputsContainer,
  StyledRadioGroupItem,
  StyledRadioGroupRoot,
  StyledSection,
} from './styled'

const inputsSchema = z.object({
  postalCode: z
    .string()
    .length(9, 'Por favor, preencha o campo CEP corretamente'),
  street: z.string().min(1, 'Por favor, preencha o campo rua'),
  number: z.string().min(1, 'Por favor, preencha o campo número'),
  complement: z.optional(z.string()).default(''),
  neighborhood: z.string().min(3, 'Por favor, preencha o campo bairro'),
  city: z.string().min(3, 'Por favor, preencha o campo cidade corretamente'),
  state: z.string().length(2, 'Por favor, preencha o campo UF'),
  paymentMethod: z.enum(['credit', 'debit', 'money'], {
    errorMap: () => ({
      message: 'Por favor, informe o método de pagamento',
    }),
  }),
})

type Inputs = z.infer<typeof inputsSchema>

export default function FormSection() {
  const navigate = useNavigate()
  const { register, handleSubmit, control } = useForm<Inputs>({
    resolver: zodResolver(inputsSchema),
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const promise = () =>
      new Promise((resolve) =>
        setTimeout(() => {
          resolve({})
        }, 2000),
      )

    toast.promise(promise, {
      loading: 'Carregando...',
      success: () => {
        setTimeout(() => {
          navigate(`/success?purchase=${JSON.stringify(data)}`, {
            replace: true,
          })
        }, 2000)

        return 'Sucesso! Agora é só esperar o café chegar até você!'
      },
    })
  }

  const onSubmitError: SubmitErrorHandler<Inputs> = (errors) => {
    const firstErrorMessage = Object.entries(errors)[0][1].message

    if (!firstErrorMessage) return

    toast.error(firstErrorMessage)
  }

  return (
    <StyledSection>
      <h2>Complete seu pedido</h2>

      <StyledForm
        id="address-form"
        onSubmit={handleSubmit(onSubmit, onSubmitError)}
      >
        <Card>
          <StyledCardHeader>
            <MapPin />

            <div>
              <span>Endereço de Entrega</span>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </StyledCardHeader>

          <StyledInputsContainer>
            <TextInput
              type="text"
              placeholder="CEP"
              inputMode="numeric"
              {...register('postalCode')}
            />
            <TextInput type="text" placeholder="Rua" {...register('street')} />
            <TextInput
              type="text"
              placeholder="Número"
              inputMode="numeric"
              {...register('number')}
            />
            <TextInput
              type="text"
              placeholder="Complemento"
              $optional
              {...register('complement')}
            />
            <TextInput
              type="text"
              placeholder="Bairro"
              {...register('neighborhood')}
            />
            <TextInput type="text" placeholder="Cidade" {...register('city')} />
            <TextInput
              type="text"
              placeholder="UF"
              maxLength={2}
              {...register('state')}
            />
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

          <Controller
            name="paymentMethod"
            control={control}
            render={({ field: { onChange } }) => (
              <StyledRadioGroupRoot onValueChange={onChange}>
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
            )}
          />
        </Card>
      </StyledForm>
    </StyledSection>
  )
}
