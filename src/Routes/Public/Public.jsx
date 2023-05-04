import { createBrowserRouter, redirect } from 'react-router-dom'
import TimePage from '../../Pages/TimePage/TimePage'
import ChooseMedia from '../../Pages/chooseMedia/chooseMedia'
import Main from '../../Layouts/index'
import AuthPage from '../../Pages/Auth_Page/Auth_Page'
import App from '../../App'
import UserPage from '../../Pages/UserPage/UserPage'
import CategorySuggestionsPage from '../../Pages/CategorySuggestionsPage/CategorySuggestionsPage'
import Media_page from '../../Pages/Media_page/Media_page'
import UserCategoriesComponent from '../../Pages/UserPage/UserCard/UserCategoriesComponent/UserCategoriesComponent'
import ChangeToShow from '../../Pages/ChangeToShow/ChangeToShow'
import ChangeToMovie from '../../Pages/ChangeToMovie/ChangeToMovie'
import Bye from '../../Pages/Bye/Bye'
import MediaByCategoryPage from '../../Pages/MediaByCategoryPage/MediaByCategoryPage'

import AdminPage from '../../Pages/AdminPage/AdminPage.jsx'
import AdminOptions from '../../Pages/AdminOptions/AdminOptions'
import AllUsers from '../../Pages/AdminOptions/AllUsers'

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
      {
        path: '/user/me',
        element: <UserPage />,
      },
      {
        path: '/user/me/preferences',
        element: <UserCategoriesComponent />,
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
        element: <TimePage />,
      },
      {
        path: '/choosemedia',
        element: <ChooseMedia />,
      },

      {
        path: '/changetoshow',
        element: <ChangeToShow />,
      },
      {
        path: '/changetomovie',
        element: <ChangeToMovie />,
      },
      {
        path: '/bye',
        element: <Bye />,
      },
      {
        path: '/mediaByCategories',

        element : <MediaByCategoryPage />
      }, 
      {
        path: '/admin',
        element : <AdminPage />
      }, 
      {
        path: '/admin/options',
        element : <AdminOptions />
      }, 
       {
        path: '/allusers',
        element : <AllUsers />
      }
    ],
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
])
