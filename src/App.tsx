import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer } from 'react-toastify'
import { globalStyles } from './styles/global'
import { Routes } from './routes'
import { AuthProvider } from './contexts/AuthContext'
import { BrowserRouter } from 'react-router-dom'

globalStyles()

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes></Routes>
        <ToastContainer></ToastContainer>
      </AuthProvider>
    </BrowserRouter>
  )
}
