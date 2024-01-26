import ReduxProvider from './ReduxProvider'
import RouterProvider from './RouterProvider'
import ThemeProvider from './ThemeProvider'

interface ProviderProps {
  children: React.ReactNode
}

export default function Provider({ children }: ProviderProps) {
  return (
    <ReduxProvider>
      <ThemeProvider>
        {children}

        <RouterProvider />
      </ThemeProvider>
    </ReduxProvider>
  )
}
