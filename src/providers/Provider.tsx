import RouterProvider from './RouterProvider'
import ThemeProvider from './ThemeProvider'

interface ProviderProps {
  children: React.ReactNode
}

export default function Provider({ children }: ProviderProps) {
  return (
    <ThemeProvider>
      {children}

      <RouterProvider />
    </ThemeProvider>
  )
}
