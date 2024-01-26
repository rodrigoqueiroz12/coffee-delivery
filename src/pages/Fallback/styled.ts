import styled, { keyframes } from 'styled-components'

import Container from '@/components/Container'

export const StyledContainer = styled(Container)`
  height: calc(100vh - 108px);
  display: flex;
  justify-content: center;
  align-items: center;
`

const slowMove = keyframes`
  0% {
    transform: translateY(0%);
  }

  33% {
    transform: translateY(-15%);
  }
  
  66% {
    transform: translateY(15%);
  }

  100% {
    transform: translateY(0%);
  }
`

export const StyledImage = styled.img`
  animation: 5s ${slowMove} infinite ease-in-out;
`
