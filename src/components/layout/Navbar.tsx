import { Link } from 'react-router-dom'
import { useSessionStore } from '@/stores/session'

export default function Navbar() {
  const { isAuthenticated, role, clear } = useSessionStore()
  return (
    <header className="border-b border-brand-gold/30">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl">
          <span className="text-brand-gold">Barber</span>Market
        </Link>
        <nav className="flex items-center gap-4">
          <Link to="/map" className="hover:text-brand-gold">Carte</Link>
          {!isAuthenticated && (
            <>
              <Link to="/login" className="hover:text-brand-gold">Connexion</Link>
              <Link to="/register" className="hover:text-brand-gold">Inscription</Link>
            </>
          )}
          {isAuthenticated && (
            <>
              {role === 'barber' && <Link to="/barber" className="hover:text-brand-gold">Mon salon</Link>}
              {role === 'client' && <Link to="/client" className="hover:text-brand-gold">Mon profil</Link>}
              {role === 'admin' && <Link to="/admin" className="hover:text-brand-gold">Admin</Link>}
              <button onClick={clear} className="border border-brand-gold px-3 py-1 rounded hover:bg-brand-gold hover:text-brand-black">
                Déconnexion
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
