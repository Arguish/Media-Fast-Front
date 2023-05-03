import { createBrowserRouter, redirect } from 'react-router-dom'
import TimePage from '../../Pages/TimePage/TimePage'
import ChooseMedia from '../../Pages/chooseMedia/chooseMedia'
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
    loader: () => {
      if (!localStorage.getItem('token')) {
        return redirect('/auth')
      } else {
        return null //here we should redirect to suggestions when page is done
      }
    },
    children: [
      {
        path: '/',
        element: <App />,
      },
      // {
        //   path: '/auth/register',
        //   element: <AuthPage />,
        // },
        {
          path: '/user/me',
          element: <UserPage />
                  }, 
        {
          path: '/preferences',
          element: <CategorySuggestionsPage />,
      },
      {
        path: '/media',
        element: <Media_page />,
      },
      {
        path: '/time',
        element: <TimePage/>
      },
      {
        path: '/choosemedia',
        element: <ChooseMedia/>
        },
      ],
    },
    {
      path: '/auth',
      element: <AuthPage />,
    },
])

export default router
