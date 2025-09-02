import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export function AdminRoute() {
  const { isAuthenticated, role } = useAuth()
  if (!isAuthenticated) return <Navigate to="/" replace />
  if (role !== 'admin') return <Navigate to="/" replace />
  return <Outlet />
}

export function UserRoute() {
  const { isAuthenticated, role } = useAuth()
  if (!isAuthenticated) return <Navigate to="/" replace />
  if (role !== 'user') return <Navigate to="/" replace />
  return <Outlet />
}


