import { createBrowserRouter, redirect } from 'react-router-dom'

import Main from '../../Layouts/index'
import AuthPage from '../../Pages/Auth_Page/Auth_Page'
import App from '../../App'
import UserPage from '../../Pages/UserPage/UserPage'
import CategorySuggestionsPage from '../../Pages/CategorySuggestionsPage/CategorySuggestionsPage'
import Media_page from '../../Pages/Media_page/Media_page'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    // loader: () => {
    //   if (!localStorage.getItem('token')) {
    //     return redirect('/auth')
    //   } else {
    //     return redirect('/') //here we should redirect to suggestions when page is done
    //   }
    // },
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
      {
        path: '/user/me',
        element: <UserPage />,
      },
      {
        path: '/preferences',
        element: <CategorySuggestionsPage />,
      },
      {
        path: '/Media',
        element: <Media_page />,
      },
    ],
  },
])

export default router
