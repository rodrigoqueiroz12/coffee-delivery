import styled from 'styled-components'

import Container from '../../components/Container'

export const StyledContainer = styled(Container)`
  padding-block: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: 70rem) {
    flex-direction: row;
  }
`
