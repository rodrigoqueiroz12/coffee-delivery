import { products } from '@/data/products'

import Product from '../Product'
import { StyledContainer, StyledH2, StyledProductsContainer } from './styled'

export default function ProductsSection() {
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
