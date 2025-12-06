export default function DashboardClient() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-bold">Mon profil</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="border border-brand-gold/30 rounded p-4">
          <h3 className="font-semibold">Historique</h3>
          <p className="text-sm text-gray-400">Coiffeurs contactés</p>
        </div>
        <div className="border border-brand-gold/30 rounded p-4">
          <h3 className="font-semibold">Favoris</h3>
          <p className="text-sm text-gray-400">Vos salons favoris</p>
        </div>
        <div className="border border-brand-gold/30 rounded p-4">
          <h3 className="font-semibold">Crédits</h3>
          <p className="text-sm text-gray-400">Solde et packs</p>
        </div>
      </div>
    </section>
  )
}
