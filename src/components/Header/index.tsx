import { ShoppingCartSimple } from '@phosphor-icons/react'
import { Link, useNavigate } from 'react-router-dom'

import { useCart } from '@/contexts/CartContext'

import Logo from '../../assets/logo.svg'
import {
  StyledCartButton,
  StyledContainer,
  StyledHeader,
  StyledLogo,
} from './styled'

export default function Header() {
  const { products } = useCart()

  const productsInCart = products.reduce((acc, curr) => {
    return acc + curr.quantity
  }, 0)

  const navigate = useNavigate()

  function handleChangePage() {
    navigate('/checkout')
  }

  return (
    <StyledHeader>
      <StyledContainer>
        <Link to={'/'}>
          <StyledLogo src={Logo} alt="" />
        </Link>

        {/* <StyledLocation>
          <MapPin weight="fill" />
          Porto Alegre, RS
        </StyledLocation> */}

        <StyledCartButton
          data-products={productsInCart}
          onClick={handleChangePage}
          disabled={products.length === 0}
        >
          <ShoppingCartSimple weight="fill" />
        </StyledCartButton>
      </StyledContainer>
    </StyledHeader>
  )
}
