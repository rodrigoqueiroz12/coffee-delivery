import styled from 'styled-components'
import Card from '@/components/Card'

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 1rem;

  @media screen and (min-width: 70rem) {
    padding: 2rem;
  }
`
