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
import AllPlatforms from '../../Pages/AdminOptions/Platforms/AllPlatforms'

import OneUser from '../../Pages/AdminOptions/OneUser'
import AllMedia from '../../Pages/AdminOptions/AllMedia'
import OneMedia from '../../Pages/AdminOptions/OneMedia'
import ShowOptionsComponent from '../../Components/ShowOptionsComponent/ShowOptionsComponent'
import AboutUs from '../../Pages/AboutUs/AboutUs'
import AllCategories from '../../Pages/AdminOptions/Categories/AllCategories'
export const router = createBrowserRouter([
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
        element: (
          <ShowOptionsComponent
            question={'¿CUÁNTO TIEMPO TIENES?'}
            optionOne={'MENOS DE DOS HORAS'}
            optionTwo={'MAS DE DOS HORAS'}
          />
        ),
      },
      {
        path: '/choosemedia',
        element: (
          <ShowOptionsComponent
            question={'¿PELI O SERIE?'}
            optionOne={'PELI'}
            optionTwo={'SERIE'}
          />
        ),
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
        path: 'user/me/categories/media/:type',
        element: <MediaByCategoryPage />,
      },
      {
        path: '/admin',
        element: <AdminPage />,
      },
      {
        path: '/admin/options',
        element: <AdminOptions />,
      },
      {
        path: '/allusers',
        element: <AllUsers />,
      },
      {
        path: '/allplatforms',
        element: <AllPlatforms />,
      },
      {
        path: '/user/:userId',
        element: <OneUser />,
      },
      {
        path: '/allmedia',
        element: <AllMedia />,
      },
      {
        path: '/media/:mediaId',
        element: <OneMedia />,
      },
      {
        path: '/aboutus',
        element: <AboutUs />,
      },
        {
        path: '/allcategories',
        element: <AllCategories />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
])
