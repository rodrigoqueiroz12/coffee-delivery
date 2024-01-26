import { useEffect, useState } from 'react'

import { api } from '@/api/axios'
import { ProductType } from '@/@types/product'

import { StyledContainer, StyledH2, StyledProductsContainer } from './styled'

import Product from '../Product'

export default function ProductsSection() {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    async function fetchProducts() {
      const res = await api.get('products')

      const data: ProductType[] = res.data

      setProducts(data)
    }

    fetchProducts()
  }, [])

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
