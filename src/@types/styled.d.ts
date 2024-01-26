import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      'yellow-dark': string
      yellow: string
      'yellow-light': string
      'purple-dark': string
      purple: string
      'purple-light': string
      'base-title': string
      'base-subtitle': string
      'base-text': string
      'base-label': string
      'base-hover': string
      'base-button': string
      'base-input': string
      'base-card': string
      background: string
      white: '#FFF'
    }

    font: {
      sizes: {
        title: {
          xl: string
          lg: string
          md: string
          sm: string
          xs: string
        }
        text: {
          lg: string
          md: string
          sm: string
          xs: string
        }
        tag: string
        button: {
          lg: string
          md: string
        }
      }
      lineHeights: {
        lg: string
        md: string
      }
    }
  }
}
