import { motion } from 'framer-motion'
import { MoreHorizontal } from 'lucide-react'
import { pipelineStages } from '../../data/mockData.js'

export default function CasesPage() {
  return (
    <div className="flex gap-5 overflow-x-auto pb-4">
      {pipelineStages.map((stage, colIndex) => (
        <div key={stage.id} className="w-80 flex-shrink-0">
          <div className="mb-4 flex items-center justify-between px-1">
            <div className="flex items-center gap-2.5">
              <span className={`h-2.5 w-2.5 rounded-full ${stage.color}`} />
              <h3 className="text-sm font-semibold text-navy-900">{stage.title}</h3>
              <span className="rounded-full bg-navy-50 px-2 py-0.5 text-xs font-medium text-navy-400">
                {stage.cases.length}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {stage.cases.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: colIndex * 0.05 + i * 0.05 }}
                className="card-surface cursor-grab p-4 transition hover:-translate-y-0.5 hover:shadow-elevated active:cursor-grabbing"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold text-navy-300">{c.id}</span>
                  <button className="text-navy-300 hover:text-navy-600">
                    <MoreHorizontal size={16} />
                  </button>
                </div>
                <p className="mt-2 text-sm font-semibold text-navy-900">{c.client}</p>
                <p className="mt-0.5 text-xs text-navy-400">{c.service}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy-100 text-[10px] font-semibold text-navy-700">
                    {c.avatar}
                  </span>
                  <span className="text-xs font-semibold text-gold-700">{c.value}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
