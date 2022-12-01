import { createContext, ReactNode, useEffect, useState } from 'react'
import { setCookie, destroyCookie, parseCookies } from 'nookies'

import { api } from '../services/api'
import { redirect } from 'react-router-dom'

type User = {
  email: string
  name?: string
  id?: string
  // createdAt: Date
  // updatedAt: Date
}

type SignInCredentials = {
  email: string
  password: string
}

type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void>
  signOut: () => void
  user?: User
  isAuthenticated: boolean
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

let authChannel: BroadcastChannel

export function signOut() {
  destroyCookie(undefined, 'luppy.token')
  destroyCookie(undefined, 'luppy.refreshToken')

  authChannel.postMessage('signOut')

  redirect('/')
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>()
  const isAuthenticated = !!user

  useEffect(() => {
    authChannel = new BroadcastChannel('auth')

    authChannel.onmessage = (message) => {
      switch (message.data) {
        case 'signOut':
          signOut()
          break
        default:
          break
      }
    }
  }, [])

  useEffect(() => {
    const { 'luppy.token': token } = parseCookies()

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`
      api
        .get('/user/me')
        .then((response) => {
          const { email, name, id } = response.data
          setUser({ email, name, id })
        })
        .catch(() => {
          setUser({} as User)
          signOut()
        })
    }
  }, [])

  async function signIn({ email, password }: SignInCredentials) {
    const response = await api.post('sessions', {
      email,
      password,
    })

    const { token, refreshToken } = response.data

    setCookie(undefined, 'luppy.token', token, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    })

    setCookie(undefined, 'luppy.refreshToken', refreshToken, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    })

    setUser({
      email,
    })

    api.defaults.headers.Authorization = `Bearer ${token}`

    redirect('/dashboard')
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  )
}
