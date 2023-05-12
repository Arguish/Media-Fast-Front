import { createBrowserRouter, redirect } from 'react-router-dom'

//Public comps
import App from '../../App'
import Main from '../../Layouts/index'
import AuthPage from '../../Pages/Auth_Page/Auth_Page'

//User Comps
import AboutUs from '../../Pages/AboutUs/AboutUs'
import UserPage from '../../Pages/UserPage/UserPage'
import MediaByCategoryPage from '../../Pages/MediaByCategoryPage/MediaByCategoryPage'
import ShowOptionsComponent from '../../Components/ShowOptionsComponent/ShowOptionsComponent'
import CategorySuggestionsPage from '../../Pages/CategorySuggestionsPage/CategorySuggestionsPage'
import UserCategoriesComponent from '../../Pages/UserPage/UserCard/UserCategoriesComponent/UserCategoriesComponent'

//Admin Comps
import OneUser from '../../Pages/AdminOptions/Users/OneUser'
import OneMedia from '../../Pages/AdminOptions/Media/OneMedia'
import AllMedia from '../../Pages/AdminOptions/Media/AllMedia'
import AllUsers from '../../Pages/AdminOptions/Users/AllUsers'
import AdminOptions from '../../Pages/AdminOptions/AdminOptions'
import AllPlatforms from '../../Pages/AdminOptions/Platforms/AllPlatforms'
import AllCategories from '../../Pages/AdminOptions/Categories/AllCategories'

//Router
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
        path: '/time',
        element: (
          <ShowOptionsComponent
            quest={
              ['¿CUÁNTO TIEMPO TIENES?', 'HOW MUCH TIME DO YOU HAVE?'][
                localStorage.getItem('lang')
              ]
            }
            array={[
              {
                option: ['MENOS DE DOS HORAS', 'LESS THAN TWO HOURS'][
                  localStorage.getItem('lang')
                ],
                url: '/user/me/categories/media/show',
              },
              {
                option: ['MAS DE DOS HORAS', 'MORE THAN TWO HOURS'][
                  localStorage.getItem('lang')
                ],
                url: '/choosemedia',
              },
            ]}
          />
        ),
      },
      {
        path: '/choosemedia',
        element: (
          <ShowOptionsComponent
            quest={
              ['¿PELI O SERIE?', 'MOVIE OR SHOW?'][localStorage.getItem('lang')]
            }
            array={[
              {
                option: ['SERIE', 'TV SHOW'][localStorage.getItem('lang')],
                url: '/user/me/categories/media/show',
              },
              {
                option: ['PELI', 'MOVIE'][localStorage.getItem('lang')],
                url: '/user/me/categories/media/movie',
              },
            ]}
          />
        ),
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
                quest={'WHAT DO YOU WANT TO DO?'}
                array={[
                  {
                    option: 'ENJOY',
                    url: '/time',
                  },
                  {
                    option: 'WORK',
                    url: '/admin/options',
                  },
                ]}
              />
            )
          }
        },
        element: (
          <ShowOptionsComponent
            quest={'WHAT DO YOU WANT TO DO?'}
            array={[
              {
                option: 'ENJOY',
                url: '/time',
              },
              {
                option: 'WORK',
                url: '/admin/options',
              },
            ]}
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
