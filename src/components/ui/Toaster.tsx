import { useEffect, useState } from 'react'

export function Toaster() {
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => {
    const handler = (e: CustomEvent<string>) => setMessage(e.detail)
    window.addEventListener('toast', handler as EventListener)
    return () => window.removeEventListener('toast', handler as EventListener)
  }, [])

  if (!message) return null
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-brand-black border border-brand-gold px-4 py-2 rounded">
      {message}
    </div>
  )
}

export function toast(msg: string) {
  window.dispatchEvent(new CustomEvent('toast', { detail: msg }))
}
