import styled from 'styled-components'

import Card from '../Card'

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-family: 'Baloo 2', monospace;
    font-size: ${(props) => props.theme.font.sizes.title.xs};
    line-height: ${(props) => props.theme.font.lineHeights.md};
    color: ${(props) => props.theme.colors['base-subtitle']};
    text-align: center;
  }

  @media screen and (min-width: 70rem) {
    flex: 1;

    h2 {
      text-align: left;
    }
  }
`

export const StyledProductsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 70rem) {
    padding-right: 0.5rem;
    height: 14rem;
    overflow-y: auto;
  }
`

export const StyledCard = styled(Card)`
  border-radius: 6px 32px;

  width: min(100%, 40rem);
  margin-inline: auto;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.purple};

    &:hover {
      opacity: 0.8;
    }
  }
`

export const StyledPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const StyledPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledPriceLabel = styled.span`
  font-size: ${(props) => props.theme.font.sizes.text.sm};
  color: ${(props) => props.theme.colors['base-text']};
  line-height: ${(props) => props.theme.font.lineHeights.md};
`

export const StyledPriceValue = styled.span`
  font-size: ${(props) => props.theme.font.sizes.text.md};
  color: ${(props) => props.theme.colors['base-text']};
  line-height: ${(props) => props.theme.font.lineHeights.md};
  font-weight: bold;
`

export const StyledPriceLabelTotal = styled.span`
  font-size: ${(props) => props.theme.font.sizes.text.lg};
  color: ${(props) => props.theme.colors['base-subtitle']};
  line-height: ${(props) => props.theme.font.lineHeights.md};
  font-weight: bold;
`

export const StyledPriceValueTotal = styled.span`
  font-size: ${(props) => props.theme.font.sizes.text.lg};
  color: ${(props) => props.theme.colors['base-subtitle']};
  line-height: ${(props) => props.theme.font.lineHeights.md};
  font-weight: bold;
`
