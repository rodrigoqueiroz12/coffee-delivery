import HeroSection from './components/HeroSection'
import ProductsSection from './components/ProductsSection'
import { StyledMain } from './styled'

export default function Home() {
  return (
    <StyledMain>
      <HeroSection />
      <ProductsSection />
    </StyledMain>
  )
}
