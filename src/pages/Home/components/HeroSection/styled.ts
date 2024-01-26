import styled, { keyframes } from 'styled-components'

import Container from '../../../../components/Container'
import { defaultTheme } from '../../../../styles/themes/default'

export const StyledSection = styled.section``

export const StyledContainer = styled(Container)`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 2.5rem 0;

  @media screen and (min-width: 1120px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 5.75rem 0;
  }
`

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 1120px) {
    justify-content: flex-start;
  }

  h1 {
    text-align: center;
    font-family: 'Baloo 2', monospace;
    color: ${(props) => props.theme.colors['base-title']};
    font-size: ${(props) => props.theme.font.sizes.title.lg};
    line-height: ${(props) => props.theme.font.lineHeights.md};
    font-weight: 800;
    margin-bottom: 1rem;

    @media screen and (min-width: 1120px) {
      max-width: 36.75rem;
      font-size: ${(props) => props.theme.font.sizes.title.xl};
      text-align: left;
    }
  }

  p {
    text-align: center;
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: ${(props) => props.theme.font.sizes.text.md};
    line-height: ${(props) => props.theme.font.lineHeights.md};
    margin-bottom: 4rem;

    @media screen and (min-width: 1120px) {
      max-width: 36.75rem;
      font-size: ${(props) => props.theme.font.sizes.text.lg};
      text-align: left;
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    @media screen and (min-width: 1120px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
`

export const StyledListItem = styled.li<{
  $color?: keyof typeof defaultTheme.colors
}>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  color: ${(props) => props.theme.colors['base-text']};
  font-size: ${(props) => props.theme.font.sizes.text.md};
  line-height: ${(props) => props.theme.font.lineHeights.md};

  > span {
    line-height: 0;
    padding: 0.5rem;
    border-radius: 9999px;
    background: ${(props) =>
      props.$color
        ? props.theme.colors[props.$color]
        : props.theme.colors['yellow-dark']};
    color: ${(props) => props.theme.colors.white};

    > svg {
      height: 1rem;
      width: 1rem;
    }
  }
`

const slowMove = keyframes`
  0% {
    transform: translateY(0%);
  }

  33% {
    transform: translateY(-5%);
  }
  
  66% {
    transform: translateY(5%);
  }

  100% {
    transform: translateY(0%);
  }
`

export const StyledSectionImage = styled.img`
  max-width: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  opacity: 0.25;
  filter: blur(1px) grayscale(20%);
  animation: 10s ${slowMove} infinite ease-in-out;

  @media screen and (min-width: 1120px) {
    position: static;
    z-index: 1;
    filter: none;
    opacity: 1;
  }
`
