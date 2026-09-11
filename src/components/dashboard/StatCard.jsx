import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'

export default function StatCard({ label, value, delta, icon: Icon, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="card-surface flex items-start justify-between p-6"
    >
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-navy-400">{label}</p>
        <p className="mt-2 font-display text-3xl font-medium text-navy-900">{value}</p>
        <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-emerald-600">
          <TrendingUp size={13} />
          {delta}
          <span className="font-normal text-navy-300">vs. mes anterior</span>
        </div>
      </div>
      {Icon && (
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-50 text-navy-700">
          <Icon size={20} strokeWidth={1.8} />
        </span>
      )}
    </motion.div>
  )
}
