import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Fallback from '@/pages/Fallback'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'

import App from './pages/_layouts/app'

const Checkout = React.lazy(() => import('@/pages/Checkout'))
const Success = React.lazy(() => import('@/pages/Success'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        index: true,
        element: <Home />,
      },
      {
        path: '/checkout',
        element: (
          <React.Suspense fallback={<Fallback />}>
            <Checkout />
          </React.Suspense>
        ),
      },
      {
        path: '/success',
        element: (
          <React.Suspense fallback={<Fallback />}>
            <Success />
          </React.Suspense>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
