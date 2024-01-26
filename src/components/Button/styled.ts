import styled, { css } from 'styled-components'

interface ButtonProps {
  $variant?: 'primary'
}

const primary = css`
  border: 0;
  border-radius: 6px;
  padding: 0.75rem 0;
  background: ${(props) => props.theme.colors.yellow};
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  font-size: ${(props) => props.theme.font.sizes.button.lg};
  line-height: ${(props) => props.theme.font.lineHeights.lg};
  transition: background 250ms ease;

  &:hover {
    background: ${(props) => props.theme.colors['yellow-dark']};
  }
`

export const StyledButton = styled.button<ButtonProps>`
  ${(props) => {
    if (props.$variant === 'primary') {
      return primary
    }
  }}
`
