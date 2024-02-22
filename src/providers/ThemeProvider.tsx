import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { defaultTheme } from '@/styles/themes/default'

interface ThemeProviderProps {
  children: React.ReactNode
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <StyledThemeProvider theme={defaultTheme}>{children}</StyledThemeProvider>
  )
}
