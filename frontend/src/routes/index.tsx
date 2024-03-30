import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

import { RoutesPath } from 'src/routes/routes'

const TaskBoardPage = lazy(() => import('src/pages/TaskBoardPage'))
const ErrorPage = lazy(() => import('src/pages/ErrorPage'))

export const Router = createBrowserRouter([
  {
    path: RoutesPath.HOME,
    element: <TaskBoardPage />,
    errorElement: <ErrorPage />,
  },
])
