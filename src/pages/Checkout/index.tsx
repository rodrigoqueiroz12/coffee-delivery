import { StyledContainer } from './styled'

import FormSection from './components/FormSection'
import CoffeeSection from './components/CoffeeSection'

export default function Checkout() {
  return (
    <main>
      <StyledContainer>
        <FormSection />

        <CoffeeSection />
      </StyledContainer>
    </main>
  )
}
