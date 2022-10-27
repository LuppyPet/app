import { Login } from './pages/Login'

import 'react-toastify/dist/ReactToastify.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { globalStyles } from './styles/global'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login></Login>,
  },
  {
    path: '/dashboard',
    element: 'VOCÊ ESTÁ LOGADO',
  },
])

globalStyles()

export function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </>
  )
}
