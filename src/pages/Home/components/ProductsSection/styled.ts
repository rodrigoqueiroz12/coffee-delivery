import styled from 'styled-components'

import Container from '../../../../components/Container'

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: 1120px) {
    gap: 2.5rem;
  }
`

export const StyledH2 = styled.h2`
  text-align: center;
  font-family: 'Baloo 2', monospace;
  font-size: ${(props) => props.theme.font.sizes.title.md};
  font-weight: 800;
  line-height: ${(props) => props.theme.font.lineHeights.md};
  color: ${(props) => props.theme.colors['base-subtitle']};

  @media screen and (min-width: 1120px) {
    text-align: left;
    font-size: ${(props) => props.theme.font.sizes.title.lg};
  }
`

export const StyledProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  justify-content: center;
  gap: 2rem;

  @media screen and (min-width: 1120px) {
    &:has(> div:hover) > div:not(:hover) {
      opacity: 0.8;
    }

    > div:hover {
      scale: 1.025;
    }
  }
`
