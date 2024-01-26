import { StyledContainer, StyledH2, StyledProductsContainer } from './styled'

import Product from '../Product'

import { products } from '@/data/products'

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
