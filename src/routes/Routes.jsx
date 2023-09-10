import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import SearchResult from '../components/SearchResult'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/room/:id',
        element:  <RoomDetails />
      },
      {
        path: '/searchResult',
        element: <SearchResult></SearchResult>
      }
    ],
  },
])
