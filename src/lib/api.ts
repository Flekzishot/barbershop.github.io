import axios from 'axios'
import { useSessionStore } from '@/stores/session'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1',
  timeout: 15000
})

api.interceptors.request.use((config) => {
  const token = useSessionStore.getState().token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
