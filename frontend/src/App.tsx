import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import LoadingPage from 'src/pages/LoadingPage'

import { store } from 'src/redux/store'
import ModalProvider from './contexts/ModalProvider'
import { Router } from './routes'

import 'react-toastify/dist/ReactToastify.css'
import './App.css'

const App = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <ToastContainer />
      <Provider store={store}>
        <ModalProvider>
          <RouterProvider router={Router} />
        </ModalProvider>
      </Provider>
    </Suspense>
  )
}

export default App
