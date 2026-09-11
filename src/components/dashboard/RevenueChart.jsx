import { motion } from 'framer-motion'
import { revenueByMonth } from '../../data/mockData.js'

export default function RevenueChart() {
  const max = Math.max(...revenueByMonth.map((m) => m.value))

  return (
    <div className="card-surface p-6 sm:p-7">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-navy-900">Ingresos mensuales</h3>
          <p className="text-xs text-navy-400">Últimos 6 meses · en miles USD</p>
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
          +15% este mes
        </span>
      </div>

      <div className="mt-8 flex h-48 items-end justify-between gap-3 sm:gap-5">
        {revenueByMonth.map((m, i) => (
          <div key={m.month} className="flex flex-1 flex-col items-center gap-3">
            <div className="flex h-40 w-full items-end overflow-hidden rounded-xl bg-navy-50">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${(m.value / max) * 100}%` }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
                className={`w-full rounded-xl ${
                  i === revenueByMonth.length - 1 ? 'bg-gold-gradient' : 'bg-navy-700'
                }`}
              />
            </div>
            <span className="text-xs font-medium text-navy-400">{m.month}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
