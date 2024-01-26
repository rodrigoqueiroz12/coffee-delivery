import { Link } from 'react-router-dom'
import {
  StyledContainer,
  StyledHeading,
  StyledImage,
  StyledParagraph,
} from './styled'

import logo from '@/assets/logo.svg'

export default function NotFound() {
  return (
    <main>
      <StyledContainer>
        <StyledImage src={logo} alt="" />
        <StyledHeading>
          Ops! A página que você procura não foi encontrada :/
        </StyledHeading>
        <StyledParagraph>
          Pedimos desculpas pelo inconveniente,{' '}
          <Link to={'/'}>clique aqui</Link> para voltar!
        </StyledParagraph>
      </StyledContainer>
    </main>
  )
}
