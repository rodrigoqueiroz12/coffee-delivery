import styled from 'styled-components'

export const StyledProduct = styled.div`
  display: flex;
  align-items: flex-start;

  img {
    width: 4rem;
    aspect-ratio: 1 / 1;
  }

  + div {
    padding-top: 1.5rem;
    border-top: 1px solid ${(props) => props.theme.colors['base-button']};
  }

  &:not(:last-child) {
    padding-bottom: 1.5rem;
  }
`

export const StyledContent = styled.div`
  margin-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const StyledTitle = styled.strong`
  color: ${(props) => props.theme.colors['base-subtitle']};
  font-size: ${(props) => props.theme.font.sizes.text.md};
  line-height: ${(props) => props.theme.font.lineHeights.md};
  font-weight: 400;
`

export const StyledActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const StyledRemoveButton = styled.button`
  border: 0;
  border-radius: 6px;
  height: 2.375rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding-inline: 0.5rem;
  text-transform: uppercase;
  background: ${(props) => props.theme.colors['base-button']};
  color: ${(props) => props.theme.colors['base-text']};
  font-size: ${(props) => props.theme.font.sizes.button.md};
  transition: background 250ms ease;

  svg {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme.colors.purple};

    transition: color 250ms ease;
  }

  &:hover {
    svg {
      color: ${(props) => props.theme.colors['purple-dark']};
    }
    background: ${(props) => props.theme.colors['base-hover']};
  }
`

export const StyledPrice = styled.span`
  display: block;
  margin-left: auto;
  color: ${(props) => props.theme.colors['base-text']};
  font-weight: bold;
  font-size: ${(props) => props.theme.font.sizes.text.md};
`
