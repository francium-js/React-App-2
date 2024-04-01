import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import LoadingPage from 'src/pages/LoadingPage'

import { store } from 'src/redux/store'
import { Router } from './routes'

import 'react-toastify/dist/ReactToastify.css'
import './App.css'

const App = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <ToastContainer />
      <Provider store={store}>
        <RouterProvider router={Router}></RouterProvider>
      </Provider>
    </Suspense>
  )
}

export default App
