import logo from '../../assets/logo.svg'
import { StyledContainer, StyledImage } from './styled'

export default function Fallback() {
  return (
    <StyledContainer>
      <StyledImage src={logo} alt="" />
    </StyledContainer>
  )
}
