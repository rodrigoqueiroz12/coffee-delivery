import { ReactNode } from 'react'
import { Toaster } from 'sonner'

import { CartProvider } from '@/contexts/CartContext'

import RouterProvider from './RouterProvider'
import ThemeProvider from './ThemeProvider'

interface ProviderProps {
  children: ReactNode
}

export default function Provider({ children }: ProviderProps) {
  return (
    <ThemeProvider>
      <CartProvider>
        {children}

        <Toaster richColors />
        <RouterProvider />
      </CartProvider>
    </ThemeProvider>
  )
}
