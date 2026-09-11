import { motion } from 'framer-motion'
import { casesByDestination } from '../../data/mockData.js'

export default function DestinationBars() {
  const total = casesByDestination.reduce((sum, d) => sum + d.value, 0)

  return (
    <div className="card-surface p-6 sm:p-7">
      <h3 className="text-sm font-semibold text-navy-900">Casos por destino</h3>
      <p className="text-xs text-navy-400">Distribución de procesos activos</p>

      <div className="mt-6 flex h-3 w-full overflow-hidden rounded-full bg-navy-50">
        {casesByDestination.map((d, i) => (
          <motion.div
            key={d.destination}
            initial={{ width: 0 }}
            animate={{ width: `${(d.value / total) * 100}%` }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={d.color}
          />
        ))}
      </div>

      <div className="mt-6 space-y-4">
        {casesByDestination.map((d) => (
          <div key={d.destination} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2.5">
              <span className={`h-2.5 w-2.5 rounded-full ${d.color}`} />
              <span className="text-navy-600">{d.destination}</span>
            </div>
            <span className="font-semibold text-navy-900">{d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
