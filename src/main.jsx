import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import themeOptions from './Themes/theme'
import { ThemeProvider } from '@emotion/react'
import { router } from './Routes/Public/Public.jsx'
import { ContextProvider } from './Context/Context/ContextProvider'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={themeOptions}>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </ThemeProvider>
  </React.StrictMode>
)
