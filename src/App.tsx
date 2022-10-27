import 'react-toastify/dist/ReactToastify.css'

import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { globalStyles } from './styles/global'
import { routes } from './routes'

globalStyles()

export function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer></ToastContainer>
    </>
  )
}
