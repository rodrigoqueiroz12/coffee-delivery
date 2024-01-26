import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import App from '@/layouts/App'
import Home from '@/pages/Home'
import Fallback from '@/pages/Fallback'
import NotFound from '@/pages/NotFound'

// eslint-disable-next-line react-refresh/only-export-components
const Checkout = React.lazy(() => import('@/pages/Checkout'))
// eslint-disable-next-line react-refresh/only-export-components
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
