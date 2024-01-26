import { DefaultTheme } from 'styled-components/dist/types'

export const defaultTheme: DefaultTheme = {
  colors: {
    'yellow-dark': '#C47F17',
    yellow: '#DBAC2C',
    'yellow-light': '#F1E9C9',
    'purple-dark': '#4B2995',
    purple: '#8047F8',
    'purple-light': '#EBE5F9',
    'base-title': '#272221',
    'base-subtitle': '#403937',
    'base-text': '#574F4D',
    'base-label': '#8D8686',
    'base-hover': '#D7D5D5',
    'base-button': '#E6E5E5',
    'base-input': '#EDEDED',
    'base-card': '#F3F2F2',
    background: '#FAFAFA',
    white: '#FFF',
  },

  font: {
    sizes: {
      title: {
        xl: '3rem',
        lg: '2rem',
        md: '1.5rem',
        sm: '1.25rem',
        xs: '1.125rem',
      },

      text: {
        lg: '1.25rem',
        md: '1rem',
        sm: '0.875rem',
        xs: '0.75rem',
      },

      tag: '0.625rem',

      button: {
        lg: '0.875rem',
        md: '0.75rem',
      },
    },

    lineHeights: {
      lg: '160%',
      md: '130%',
    },
  },
} as const
