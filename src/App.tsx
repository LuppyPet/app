import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'

import 'react-toastify/dist/ReactToastify.css';


import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/dashboard',
    element: 'VOCÊ ESTÁ LOGADO'
  }
])

export function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </>
  )
}
