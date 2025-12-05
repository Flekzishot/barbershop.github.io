import { Route, Routes } from 'react-router-dom'
import { Toaster } from './components/ui/Toaster'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ForgotPassword from './pages/auth/ForgotPassword'
import VerifyEmail from './pages/auth/VerifyEmail'
import MapSearch from './pages/MapSearch'
import DashboardBarber from './pages/dashboard/DashboardBarber'
import DashboardClient from './pages/dashboard/DashboardClient'
import AdminPortal from './pages/admin/AdminPortal'
import ProtectedRoute from './routes/ProtectedRoute'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapSearch />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-email" element={<VerifyEmail />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/barber" element={<DashboardBarber />} />
            <Route path="/client" element={<DashboardClient />} />
            <Route path="/admin" element={<AdminPortal />} />
          </Route>
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}
