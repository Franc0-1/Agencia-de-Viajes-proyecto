const STYLES = {
  Nuevo: 'bg-navy-50 text-navy-600',
  Documentación: 'bg-gold-50 text-gold-700',
  Radicado: 'bg-blue-50 text-blue-600',
  Aprobado: 'bg-emerald-50 text-emerald-600',
  'En proceso': 'bg-gold-50 text-gold-700',
}

export default function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
        STYLES[status] ?? 'bg-navy-50 text-navy-600'
      }`}
    >
      {status}
    </span>
  )
}
