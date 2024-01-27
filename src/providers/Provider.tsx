import { ProductsContextProvider } from '@/contexts/ProductsContext'
import RouterProvider from './RouterProvider'
import ThemeProvider from './ThemeProvider'

interface ProviderProps {
  children: React.ReactNode
}

export default function Provider({ children }: ProviderProps) {
  return (
    <ProductsContextProvider>
      <ThemeProvider>
        {children}

        <RouterProvider />
      </ThemeProvider>
    </ProductsContextProvider>
  )
}
