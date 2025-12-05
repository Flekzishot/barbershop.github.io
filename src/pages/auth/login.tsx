import { useState } from 'react'
import { api } from '@/lib/api'
import { useSessionStore } from '@/stores/session'
import { toast } from '@/components/ui/Toaster'

export default function Login() {
  const { setSession } = useSessionStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const { data } = await api.post('/auth/login', { email, password })
      setSession(data.token, data.user.role)
      toast('Connexion réussie')
    } catch (e: any) {
      toast(e?.response?.data?.message || 'Erreur de connexion')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="mx-auto max-w-md px-4 py-10">
      <h2 className="text-2xl font-bold mb-4">Connexion</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <input className="w-full bg-transparent border border-brand-gold/30 rounded p-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full bg-transparent border border-brand-gold/30 rounded p-2" placeholder="Mot de passe" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button disabled={loading} className="w-full border border-brand-gold px-3 py-2 rounded hover:bg-brand-gold hover:text-brand-black">
          {loading ? 'Connexion...' : 'Se connecter'}
        </button>
      </form>
    </section>
  )
}
