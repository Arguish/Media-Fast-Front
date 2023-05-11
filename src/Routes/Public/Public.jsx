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
import AdminOptions from '../../Pages/AdminOptions/AdminOptions'
import AllUsers from '../../Pages/AdminOptions/Users/AllUsers'
import AllPlatforms from '../../Pages/AdminOptions/Platforms/AllPlatforms'

import OneUser from '../../Pages/AdminOptions/Users/OneUser'
import AllMedia from '../../Pages/AdminOptions/Media/AllMedia'
import OneMedia from '../../Pages/AdminOptions/Media/OneMedia'
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
            question={
              ['¿CUÁNTO TIEMPO TIENES?', 'HOW MUCH TIME DO YOU HAVE?'][
                localStorage.getItem('lang')
              ]
            }
            optionOne={
              ['MENOS DE DOS HORAS', 'LESS THAN TWO HOURS'][
                localStorage.getItem('lang')
              ]
            }
            optionTwo={
              ['MAS DE DOS HORAS', 'MORE THAN TWO HOURS'][
                localStorage.getItem('lang')
              ]
            }
          />
        ),
      },
      {
        path: '/choosemedia',
        element: (
          <ShowOptionsComponent
            question={
              ['¿PELI O SERIE?', 'MOVIE OR SHOW?'][localStorage.getItem('lang')]
            }
            optionOne={['SERIE', 'TV SHOW'][localStorage.getItem('lang')]}
            optionTwo={['PELI', 'MOVIE'][localStorage.getItem('lang')]}
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
        loader: () => {
          if (localStorage.getItem('role') !== 'admin') {
            return redirect('/time')
          } else {
            return (
              <ShowOptionsComponent
                question={'WHAT DO YOU WANT TO DO?'}
                optionOne={'ENJOY'}
                optionTwo={'WORK'}
              />
            )
          }
        },
        element: (
          <ShowOptionsComponent
            question={'WHAT DO YOU WANT TO DO?'}
            optionOne={'ENJOY'}
            optionTwo={'WORK'}
          />
        ),
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
