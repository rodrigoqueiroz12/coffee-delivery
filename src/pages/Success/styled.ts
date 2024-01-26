import styled from 'styled-components'
import Container from '../../components/Container'
import { defaultTheme } from '../../styles/themes/default'

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-block: 2rem;

  @media screen and (min-width: 1120px) {
    display: grid;
    align-items: end;
    grid-template-columns: minmax(480px, 32.875rem) 1fr;
    gap: 6.25rem;
  }
`

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme.colors['yellow-dark']};
    font-family: 'Baloo 2', monospace;
    font-weight: 800;
    font-size: ${(props) => props.theme.font.sizes.title.md};
    line-height: ${(props) => props.theme.font.lineHeights.md};

    @media screen and (min-width: 1120px) {
      font-size: ${(props) => props.theme.font.sizes.title.lg};
    }
  }

  p {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: ${(props) => props.theme.font.sizes.text.sm};
    line-height: ${(props) => props.theme.font.lineHeights.md};
    margin-bottom: 2.5rem;

    @media screen and (min-width: 1120px) {
      font-size: ${(props) => props.theme.font.sizes.text.lg};
    }
  }
`

export const StyledContentContainer = styled.div`
  background: linear-gradient(90deg, #dbac2c, #8047f8);
  padding: 2px;
  border-radius: 6px 32px;
  overflow: hidden;
`

export const StyledContent = styled.div`
  background: ${(props) => props.theme.colors.background};
  border-radius: 4px 30px;
  padding: 2rem 1rem;
`

export const StyledItemsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const StyledListItemContent = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: ${(props) => props.theme.colors['base-text']};
    font-size: ${(props) => props.theme.font.sizes.text.md};
    line-height: ${(props) => props.theme.font.lineHeights.md};
  }
`

interface StyledIconProps {
  $color?: keyof typeof defaultTheme.colors
}

export const StyledIcon = styled.span<StyledIconProps>`
  background: ${(props) =>
    props.$color
      ? props.theme.colors[props.$color]
      : props.theme.colors.yellow};
  line-height: 1;
  border-radius: 9999px;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme.colors.white};
  }
`

export const StyledImage = styled.img`
  max-width: 100%;
`
