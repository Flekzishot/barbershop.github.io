import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function MapSearch() {
  const position: [number, number] = [33.5731, -7.5898] // Casablanca
  return (
    <section className="mx-auto max-w-6xl px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Trouver un coiffeur près de chez vous</h2>
      <div className="grid md:grid-cols-4 gap-6">
        <div className="md:col-span-1 border border-brand-gold/30 rounded p-4">
          <h3 className="font-semibold">Filtres</h3>
          <div className="mt-2 space-y-2 text-sm text-gray-300">
            <label className="block">Catégorie</label>
            <select className="w-full bg-transparent border border-brand-gold/30 rounded p-2">
              <option>Mixte</option>
              <option>Homme</option>
              <option>Femme</option>
              <option>Enfant</option>
            </select>
            <label className="block">Prix max (MAD)</label>
            <input type="number" className="w-full bg-transparent border border-brand-gold/30 rounded p-2" />
          </div>
        </div>
        <div className="md:col-span-3 h-[480px] border border-brand-gold/30 rounded overflow-hidden">
          <MapContainer center={position} zoom={12} style={{ height: '100%', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
              <Popup>Exemple de salon — Casablanca</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  )
}
