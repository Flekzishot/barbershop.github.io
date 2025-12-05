import { useState } from 'react'
import { api } from '@/lib/api'
import { toast } from '@/components/ui/Toaster'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await api.post('/auth/forgot-password', { email })
      toast('Email envoyé si le compte existe')
    } catch (error) {
      const axiosError = error as { response?: { data?: { message?: string } } }; toast(axiosError?.response?.data?.message || 'Erreur')
    }
  }

  return (
    <section className="mx-auto max-w-md px-4 py-10">
      <h2 className="text-2xl font-bold mb-4">Mot de passe oublié</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <input className="w-full bg-transparent border border-brand-gold/30 rounded p-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className="w-full border border-brand-gold px-3 py-2 rounded hover:bg-brand-gold hover:text-brand-black">Envoyer</button>
      </form>
    </section>
  )
}
