import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Public/Public.jsx'
import { ThemeProvider } from '@emotion/react'
import themeOptions from './Themes/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={themeOptions}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
