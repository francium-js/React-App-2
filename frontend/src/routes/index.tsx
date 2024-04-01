import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

import { RoutesPath } from 'src/routes/routes'

const BoardListPage = lazy(() => import('src/pages/BoardListPage'))
const BoardPage = lazy(() => import('src/pages/BoardPage'))
const ErrorPage = lazy(() => import('src/pages/ErrorPage'))

const BoardLayout = lazy(() => import('src/layouts/BoardLayout'))

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <BoardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: RoutesPath.BOARD_LIST,
        element: <BoardListPage />,
      },
      {
        path: RoutesPath.BOARD,
        element: <BoardPage />,
      },
    ],
  },
])
