import styled from 'styled-components'

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
