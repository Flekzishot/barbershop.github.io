export default function DashboardBarber() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-bold">Mon salon</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="border border-brand-gold/30 rounded p-4">
          <h3 className="font-semibold">Statistiques</h3>
          <p className="text-sm text-gray-400">Vues, clics, contacts débloqués</p>
        </div>
        <div className="border border-brand-gold/30 rounded p-4">
          <h3 className="font-semibold">Annonces</h3>
          <p className="text-sm text-gray-400">Créer, gérer, booster</p>
        </div>
        <div className="border border-brand-gold/30 rounded p-4">
          <h3 className="font-semibold">Crédits</h3>
          <p className="text-sm text-gray-400">Solde, packs, dépenses</p>
        </div>
      </div>
    </section>
  )
}
