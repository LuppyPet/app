import React, { useContext } from 'react'
import {
  Navigate,
  Outlet,
  Route,
  Routes as ReactRouterRoutes,
} from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import { Login } from '../pages/Login'
import { SignUp } from '../pages/SignUp'

const PrivateRoute = () => {
  const { isAuthenticated } = useContext(AuthContext)
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />
}

export const Routes: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <ReactRouterRoutes>
      {/* private routes */}
      {isAuthenticated ? (
        <Route element={<PrivateRoute />}>
          <Route
            path="/dashboard"
            element={
              <>
                <h1>VC ESTÁ LOGADO</h1>{' '}
                {/* <button type="button" onClick={signOut}>
                  SAIR
                </button> */}
              </>
            }
          />

          <Route path="/" element={<Navigate to={'/dashboard'} replace />} />
          <Route
            path="*"
            element={
              <h1>Página não encontrada! Você digitou o endereço correto?</h1>
            }
          />
        </Route>
      ) : (
        <>
          {/* public routes */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route
            path="*"
            element={
              <h1>Página não encontrada! Você digitou o endereço correto?</h1>
            }
          />
        </>
      )}
    </ReactRouterRoutes>
  )
}
