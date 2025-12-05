import { motion } from 'framer-motion'
export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold"
      >
        Trouvez les meilleurs coiffeurs & barbiers près de vous
      </motion.h1>
      <p className="text-gray-400 mt-2">
        Boosts, annonces premium, abonnement “Pro Vendu”, crédits intégrés, et messagerie sécurisée.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {['Boost 24h', 'Boost 72h', 'Boost 7 jours'].map((title, i) => (
          <div key={i} className="border border-brand-gold/30 rounded p-4">
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-gray-400 mt-2">Mettez votre annonce en avant et gagnez en visibilité.</p>
            <button className="mt-4 border border-brand-gold px-3 py-1 rounded hover:bg-brand-gold hover:text-brand-black">Découvrir</button>
          </div>
        ))}
      </div>
    </section>
  )
}
