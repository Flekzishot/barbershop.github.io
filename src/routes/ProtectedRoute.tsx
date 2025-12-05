import { Navigate, Outlet } from 'react-router-dom'
import { useSessionStore } from '@/stores/session'

export default function ProtectedRoute() {
  const { isAuthenticated } = useSessionStore()
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
}
