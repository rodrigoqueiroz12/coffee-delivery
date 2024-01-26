import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { defaultTheme } from '@/styles/themes/default'

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
    h2 {
      text-align: left;
    }
  }
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: min(100%, 40rem);
  margin-inline: auto;

  @media screen and (min-width: 70rem) {
    width: 40rem;
  }
`

export const StyledCardHeader = styled.div<{
  $iconColor?: keyof typeof defaultTheme.colors
}>`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  svg {
    height: 1.375rem;
    min-width: 1.375rem;
    color: ${(props) => props.theme.colors[props.$iconColor || 'yellow']};
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    :nth-child(1) {
      color: ${(props) => props.theme.colors['base-subtitle']};
      font-size: ${(props) => props.theme.font.sizes.text.md};
      line-height: ${(props) => props.theme.font.lineHeights.md};
    }

    :nth-child(2) {
      color: ${(props) => props.theme.colors['base-text']};
      font-size: ${(props) => props.theme.font.sizes.text.sm};
      line-height: ${(props) => props.theme.font.lineHeights.md};
    }
  }
`

export const StyledInputsContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr 3.75rem;
  grid-template-rows: repeat(auto-fill, 1fr);
  gap: 1rem;

  :nth-child(1) {
    grid-column: 1 / 4;
    grid-row: 1;
  }

  :nth-child(2) {
    grid-column: 1 / 4;
    grid-row: 2;
  }

  :nth-child(3) {
    grid-column: 1 / 2;
    grid-row: 3;
  }

  :nth-child(4) {
    grid-column: 2 / 4;
    grid-row: 3;
  }
`

export const StyledRadioGroupRoot = styled(RadioGroup.Root)`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 0.75rem;

  @media screen and (min-width: 70rem) {
    grid-template-rows: unset;
    grid-template-columns: repeat(3, 1fr);
  }
`

export const StyledRadioGroupItem = styled(RadioGroup.Item)`
  background: transparent;
  border: 1px solid transparent;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;
  border-radius: 6px;
  background: ${(props) => props.theme.colors['base-button']};

  transition:
    background 250ms ease,
    border 250ms ease;

  &:enabled {
    label {
      cursor: pointer;
    }
  }

  &:enabled:hover {
    background: ${(props) => props.theme.colors['base-hover']};

    label {
      color: ${(props) => props.theme.colors['base-subtitle']};
    }
  }

  &[data-state='checked'] {
    background: ${(props) => props.theme.colors['purple-light']};
    border: 1px solid ${(props) => props.theme.colors.purple};
  }

  svg {
    width: 1rem;
    height: 1rem;

    color: ${(props) => props.theme.colors.purple};
  }

  label {
    font-size: ${(props) => props.theme.font.sizes.button.md};
    color: ${(props) => props.theme.colors['base-text']};
    text-transform: uppercase;
    line-height: ${(props) => props.theme.font.lineHeights.lg};
    white-space: nowrap;
  }
`
