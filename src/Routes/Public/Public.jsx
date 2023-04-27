import { createBrowserRouter } from 'react-router-dom'

import Main from '../../Layouts/index'
import AuthPage from '../../Pages/Auth_Page/Auth_Page'
import App from '../../App'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/auth',
        element: <AuthPage />,
      },
      {
        path: '/auth/register',
        element: <AuthPage />,
      },
    ],
  },
])

export default router
