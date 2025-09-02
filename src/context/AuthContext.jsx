import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext({
  isAuthenticated: false,
  role: null,
  login: (role) => {},
  logout: () => {},
})

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [role, setRole] = useState(null)

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('wion_auth_state') || 'null')
      if (stored && stored.isAuthenticated && stored.role) {
        setIsAuthenticated(true)
        setRole(stored.role)
      }
    } catch (e) {
      // ignore
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('wion_auth_state', JSON.stringify({ isAuthenticated, role }))
  }, [isAuthenticated, role])

  const login = (newRole) => {
    setIsAuthenticated(true)
    setRole(newRole)
  }

  const logout = () => {
    setIsAuthenticated(false)
    setRole(null)
    localStorage.removeItem('wion_auth_state')
  }

  const value = useMemo(() => ({ isAuthenticated, role, login, logout }), [isAuthenticated, role])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}


