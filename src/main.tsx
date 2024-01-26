import React from 'react'
import ReactDOM from 'react-dom/client'

import Provider from '@/providers/Provider.tsx'
import { GlobalStyle } from '@/styles/global.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <GlobalStyle />
    </Provider>
  </React.StrictMode>,
)
