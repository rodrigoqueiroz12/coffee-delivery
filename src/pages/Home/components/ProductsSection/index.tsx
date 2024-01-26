import { useEffect } from 'react'
import { StyledContainer, StyledH2, StyledProductsContainer } from './styled'

import Product from '../Product'

import { getProducts } from '@/redux/slices/productSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

export default function ProductsSection() {
  const products = useAppSelector((state) => state.products.products)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

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
