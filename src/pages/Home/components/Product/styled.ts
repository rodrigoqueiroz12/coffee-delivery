import styled from 'styled-components'

export const StyledProduct = styled.div`
  max-width: 256px;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.25rem;
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 36px 6px 36px;
  box-shadow:
    1px 2px 2px hsl(0, 4%, 85%, 0.1),
    2px 4px 4px hsl(0, 4%, 85%, 0.1),
    4px 8px 8px hsl(0, 4%, 85%, 0.1),
    8px 16px 16px hsl(0, 4%, 85%, 0.1),
    16px 32px 32px hsl(0, 4%, 85%, 0.1);

  transition:
    opacity 150ms ease,
    scale 150ms ease;
`

export const StyledProductImage = styled.img`
  margin-block: -2.25rem 0.75rem;
  width: 7rem;
  aspect-ratio: 1 / 1;
`

export const StyledTagsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.25rem;

  margin-bottom: 1rem;
`

export const StyledTag = styled.span`
  border-radius: 9999px;
  background: ${(props) => props.theme.colors['yellow-light']};
  padding: 0.25rem 0.5rem;
  color: ${(props) => props.theme.colors['yellow-dark']};
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${(props) => props.theme.font.sizes.tag};
  line-height: ${(props) => props.theme.font.lineHeights.md};
`

export const StyledTitle = styled.strong`
  font-family: 'Baloo 2', monospace;
  font-size: ${(props) => props.theme.font.sizes.title.sm};
  color: ${(props) => props.theme.colors['base-subtitle']};
  line-height: ${(props) => props.theme.font.lineHeights.md};
  margin-bottom: 0.5rem;
`

export const StyledDescription = styled.p`
  margin-bottom: 2rem;
  max-width: 13.5rem;
  text-align: center;
  line-height: ${(props) => props.theme.font.lineHeights.md};
  font-size: ${(props) => props.theme.font.sizes.text.sm};
  color: ${(props) => props.theme.colors['base-label']};
`

export const StyledActionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`

export const StyledPrice = styled.strong`
  color: ${(props) => props.theme.colors['base-text']};
  font-size: ${(props) => props.theme.font.sizes.text.sm};
  line-height: ${(props) => props.theme.font.lineHeights.md};

  span {
    font-family: 'Baloo 2', sans-serif;
    font-size: ${(props) => props.theme.font.sizes.title.md};
    font-weight: 800;
  }
`

export const StyledBuyButton = styled.button`
  height: 2.375rem;
  border: 0;
  line-height: 0;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.colors['purple-dark']};
  color: ${(props) => props.theme.colors.white};

  transition: background 150ms ease;

  &:enabled:hover {
    background: ${(props) => props.theme.colors.purple};
  }

  svg {
    height: 1.375rem;
    width: 1.375rem;
  }
`

export const StyledCounter = styled.div`
  width: fit-content;
  height: 2.375rem;
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;
  background: ${(props) => props.theme.colors['base-button']};
  border-radius: 6px;

  button {
    border: 0;
    background: 0;
    line-height: 0;
    color: ${(props) => props.theme.colors.purple};

    transition: color 150ms ease;

    &:hover {
      color: ${(props) => props.theme.colors['purple-dark']};
    }

    svg {
      height: 0.875rem;
      width: 0.875rem;
    }
  }

  span {
    display: block;
    min-width: 1.25rem;
    text-align: center;
    color: ${(props) => props.theme.colors['base-title']};
    font-size: ${(props) => props.theme.font.sizes.text.md};
    line-height: ${(props) => props.theme.font.lineHeights.md};
  }
`
