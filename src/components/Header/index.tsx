import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'

import Logo from '../../assets/logo.svg'

import {
  StyledCartButton,
  StyledContainer,
  StyledHeader,
  StyledLocation,
  StyledLogo,
} from './styled'

import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
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

        <StyledLocation>
          <MapPin weight="fill" />
          Porto Alegre, RS
        </StyledLocation>

        <StyledCartButton data-products="1" onClick={handleChangePage}>
          <ShoppingCartSimple weight="fill" />
        </StyledCartButton>
      </StyledContainer>
    </StyledHeader>
  )
}
