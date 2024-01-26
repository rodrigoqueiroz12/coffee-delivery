import styled from 'styled-components'

import Container from '@/components/Container'

export const StyledContainer = styled(Container)`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledImage = styled.img`
  margin-bottom: 4rem;
`

export const StyledHeading = styled.h1`
  font-family: 'Baloo 2', monospace;
  font-size: ${(props) => props.theme.font.sizes.title.md};
  line-height: ${(props) => props.theme.font.lineHeights.md};
  color: ${(props) => props.theme.colors['base-title']};
  margin-bottom: 1rem;
  text-align: center;
`

export const StyledParagraph = styled.p`
  font-size: ${(props) => props.theme.font.sizes.text.md};
  line-height: ${(props) => props.theme.font.lineHeights.lg};
  color: ${(props) => props.theme.colors['base-text']};
  text-align: center;

  a {
    color: ${(props) => props.theme.colors.yellow};
    text-decoration: none;
  }
`
