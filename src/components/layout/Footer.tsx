export default function Footer() {
  return (
    <footer className="border-t border-brand-gold/30">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-400 flex justify-between">
        <p>© {new Date().getFullYear()} BarberMarket — Tous droits réservés.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-brand-gold">CGU</a>
          <a href="#" className="hover:text-brand-gold">Confidentialité</a>
          <a href="#" className="hover:text-brand-gold">Contact</a>
        </div>
      </div>
    </footer>
  )
}
