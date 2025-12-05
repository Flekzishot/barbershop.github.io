export default function AdminPortal() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-bold">Admin — Dashboard</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="border border-brand-gold/30 rounded p-4">
          <h3 className="font-semibold">Utilisateurs</h3>
          <p className="text-sm text-gray-400">Gérer comptes, rôles, bannir</p>
        </div>
        <div className="border border-brand-gold/30 rounded p-4">
          <h3 className="font-semibold">Annonces</h3>
          <p className="text-sm text-gray-400">Modérer, supprimer, sponsoriser</p>
        </div>
        <div className="border border-brand-gold/30 rounded p-4">
          <h3 className="font-semibold">Revenus</h3>
          <p className="text-sm text-gray-400">Crédits, abonnements, packs</p>
        </div>
      </div>
    </section>
  )
}
