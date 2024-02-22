import styled from 'styled-components'

import Container from '../Container'

export const StyledHeader = styled.header`
  background: transparent;
`

export const StyledContainer = styled(Container)`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`

export const StyledLogo = styled.img`
  height: 2.5rem;
`

export const StyledLocation = styled.div`
  margin-left: auto;
  padding-block: 0.5rem;
  padding-inline: 0.5rem 0.75rem;
  border-radius: 6px;
  background: ${(props) => props.theme.colors['purple-light']};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${(props) => props.theme.colors['purple-dark']};
  font-size: ${(props) => props.theme.font.sizes.text.sm};

  svg {
    height: 1.375rem;
    width: 1.375rem;
    color: ${(props) => props.theme.colors.purple};
  }
`

export const StyledCartButton = styled.button`
  all: unset;
  position: relative;
  line-height: 0;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.colors['yellow-light']};

  transition: opacity 150ms ease;

  &::before {
    content: attr(data-products);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 9999px;
    background: ${(props) => props.theme.colors['yellow-dark']};
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.font.sizes.text.sm};
    line-height: ${(props) => props.theme.font.lineHeights.md};
    font-weight: bold;
  }

  &:not(:disabled):hover {
    cursor: pointer;
    opacity: 0.9;
  }

  svg {
    height: 1.375rem;
    width: 1.375rem;
    color: ${(props) => props.theme.colors['yellow-dark']};
  }
`
