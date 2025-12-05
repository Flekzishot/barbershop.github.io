import { useState } from 'react'
import { api } from '@/lib/api'
import { toast } from '@/components/ui/Toaster'

export default function Register() {
  const [role, setRole] = useState<'client' | 'barber'>('client')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await api.post('/auth/register', { role, name, email, phone, password })
      toast('Inscription réussie — veuillez vérifier votre email')
    } catch (error) {
      const axiosError = error as { response?: { data?: { message?: string } } }; toast(axiosError?.response?.data?.message || 'Erreur lors de l’inscription')
    }
  }

  return (
    <section className="mx-auto max-w-md px-4 py-10">
      <h2 className="text-2xl font-bold mb-4">Inscription</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <select className="w-full bg-transparent border border-brand-gold/30 rounded p-2" value={role} onChange={(e) => setRole(e.target.value as 'client' | 'barber')}>
          <option value="client">Client</option>
          <option value="barber">Coiffeur/Barbier</option>
        </select>
        <input className="w-full bg-transparent border border-brand-gold/30 rounded p-2" placeholder="Nom complet" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="w-full bg-transparent border border-brand-gold/30 rounded p-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full bg-transparent border border-brand-gold/30 rounded p-2" placeholder="Téléphone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input className="w-full bg-transparent border border-brand-gold/30 rounded p-2" placeholder="Mot de passe" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="w-full border border-brand-gold px-3 py-2 rounded hover:bg-brand-gold hover:text-brand-black">Créer mon compte</button>
      </form>
    </section>
  )
}
