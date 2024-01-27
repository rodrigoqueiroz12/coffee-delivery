import { StyledContainer, StyledH2, StyledProductsContainer } from './styled'

import Product from '../Product'
import { useProducts } from '@/hooks/useProducts'

export default function ProductsSection() {
  const { products } = useProducts()

  return (
    <section>
      <StyledContainer>
        <StyledH2>Nossos cafés</StyledH2>

        <StyledProductsContainer>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </StyledProductsContainer>
      </StyledContainer>
    </section>
  )
}
