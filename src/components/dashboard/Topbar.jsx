import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Bell, Menu, ChevronDown, Plus } from 'lucide-react'
import { officeOptions } from '../../data/mockData.js'

export default function Topbar({ title, subtitle, onMenuClick }) {
  const [office, setOffice] = useState(officeOptions[0])
  const [officeOpen, setOfficeOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-navy-100 bg-white/90 backdrop-blur">
      <div className="flex h-20 items-center justify-between gap-4 px-5 sm:px-8">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-100 lg:hidden"
          >
            <Menu size={18} />
          </button>
          <div>
            <h1 className="font-display text-xl font-medium text-navy-900 sm:text-2xl">{title}</h1>
            {subtitle && <p className="hidden text-xs text-navy-400 sm:block">{subtitle}</p>}
          </div>
        </div>

        <div className="hidden max-w-md flex-1 items-center gap-2 rounded-full border border-navy-100 bg-navy-50/60 px-4 py-2.5 md:flex">
          <Search size={16} className="text-navy-400" />
          <input
            type="text"
            placeholder="Buscar clientes, casos, documentos..."
            className="w-full bg-transparent text-sm text-navy-700 outline-none placeholder:text-navy-300"
          />
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <button className="hidden items-center gap-2 rounded-full bg-navy-900 px-4 py-2.5 text-xs font-semibold text-white shadow-soft transition hover:bg-navy-800 sm:flex">
            <Plus size={14} />
            Nuevo caso
          </button>

          <div className="relative">
            <button
              onClick={() => setOfficeOpen((o) => !o)}
              onBlur={() => setTimeout(() => setOfficeOpen(false), 150)}
              className="flex items-center gap-2 rounded-full border border-navy-100 px-3 py-2 text-sm transition hover:border-navy-300"
            >
              <span>{office.flag}</span>
              <span className="hidden font-medium text-navy-700 sm:inline">{office.label}</span>
              <ChevronDown size={14} className="text-navy-400" />
            </button>
            <AnimatePresence>
              {officeOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-xl border border-navy-100 bg-white shadow-card"
                >
                  {officeOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onMouseDown={() => {
                        setOffice(opt)
                        setOfficeOpen(false)
                      }}
                      className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-navy-600 transition hover:bg-navy-50"
                    >
                      <span>{opt.flag}</span> {opt.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-navy-100 text-navy-500 transition hover:border-navy-300">
            <Bell size={17} />
            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-gold-500" />
          </button>

          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-100 text-sm font-semibold text-navy-700">
            CR
          </span>
        </div>
      </div>
    </header>
  )
}
