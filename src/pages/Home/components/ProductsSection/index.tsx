import { useEffect, useState } from 'react'
import { StyledContainer, StyledH2, StyledProductsContainer } from './styled'

import Product from '../Product'

import { Product as ProductT } from '@/@types/product'
import { products as productsData } from '@/data/products'

export default function ProductsSection() {
  const [products, setProducts] = useState<ProductT[]>([])

  useEffect(() => {
    async function getProducts() {
      const data: ProductT[] = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(productsData)
        }, 1500)
      })

      setProducts(data)
    }

    getProducts()
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
