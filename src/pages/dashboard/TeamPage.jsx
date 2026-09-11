import { motion } from 'framer-motion'
import { Mail, Briefcase } from 'lucide-react'
import { team } from '../../data/mockData.js'

export default function TeamPage() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {team.map((member, i) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="card-surface flex flex-col items-center p-7 text-center"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-gradient text-lg font-semibold text-gold-200 shadow-soft">
            {member.avatar}
          </span>
          <h3 className="mt-4 text-sm font-semibold text-navy-900">{member.name}</h3>
          <p className="text-xs text-navy-400">{member.role}</p>

          <div className="mt-5 flex items-center gap-1.5 rounded-full bg-navy-50 px-3 py-1.5 text-xs font-medium text-navy-600">
            <Briefcase size={12} />
            {member.cases} casos activos
          </div>

          <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-full border border-navy-100 py-2.5 text-xs font-semibold text-navy-600 transition hover:border-navy-300">
            <Mail size={13} />
            Contactar
          </button>
        </motion.div>
      ))}
    </div>
  )
}
