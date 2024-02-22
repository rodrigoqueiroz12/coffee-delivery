import { Navigate } from 'react-router-dom'

import { useCart } from '@/contexts/CartContext'

import CoffeeSection from './components/CoffeeSection'
import FormSection from './components/FormSection'
import { StyledContainer } from './styled'

export default function Checkout() {
  const { products } = useCart()

  const hasProducts = products.length > 0

  if (!hasProducts) {
    return <Navigate to="/" />
  }

  return (
    <main>
      <StyledContainer>
        <FormSection />

        <CoffeeSection />
      </StyledContainer>
    </main>
  )
}
