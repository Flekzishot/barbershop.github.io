import { create } from 'zustand'

type Role = 'client' | 'barber' | 'admin' | null

interface SessionState {
  token: string | null
  role: Role
  isAuthenticated: boolean
  setSession: (token: string, role: Role) => void
  clear: () => void
}

export const useSessionStore = create<SessionState>((set) => ({
  token: null,
  role: null,
  isAuthenticated: false,
  setSession: (token, role) => set({ token, role, isAuthenticated: true }),
  clear: () => set({ token: null, role: null, isAuthenticated: false })
}))
