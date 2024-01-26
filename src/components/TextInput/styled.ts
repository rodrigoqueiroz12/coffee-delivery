import styled, { css } from 'styled-components'

export const StyledInputContainer = styled.div<{ $optional: boolean }>`
  position: relative;
  background: ${(props) => props.theme.colors['base-input']};
  ${(props) =>
    props.$optional
      ? css`
          padding-inline: 0.75rem calc(0.75rem + 0.5rem + 2.875rem);
        `
      : css`
          padding-inline: 0.75rem;
        `}

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors['base-button']};
  transition: border 250ms ease-in-out;

  &:is(:focus-within, :has(input:not(:placeholder-shown))) {
    border: 1px solid ${(props) => props.theme.colors['yellow-dark']};
  }

  ${(props) =>
    props.$optional
      ? css`
          &::before {
            opacity: 0;
            position: absolute;
            top: 50%;
            right: 0.75rem;
            content: 'Opcional';
            display: block;
            font-size: ${(props) => props.theme.font.sizes.text.xs};
            font-style: italic;
            color: ${(props) => props.theme.colors['base-label']};
            translate: 0 -50%;
            pointer-events: none;
            user-select: none;
            transition: opacity 250ms ease-in-out;
          }

          &:is(:focus-within)::before {
            opacity: 1;
          }
        `
      : null}
`

export const StyledInput = styled.input`
  padding-block: 0.75rem;
  outline: none;
  border: 0;
  background: transparent;
  width: 100%;
  font-size: ${(props) => props.theme.font.sizes.text.sm};
  color: ${(props) => props.theme.colors['base-text']};
  line-height: ${(props) => props.theme.font.lineHeights.md};

  &::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
  }
`
