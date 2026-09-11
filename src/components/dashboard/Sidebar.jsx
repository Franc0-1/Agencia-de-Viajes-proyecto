import { NavLink } from 'react-router-dom'
import {
  Compass,
  LayoutGrid,
  Users,
  Kanban,
  FolderClosed,
  CalendarDays,
  UsersRound,
  ArrowLeftCircle,
  Settings,
} from 'lucide-react'

const NAV = [
  { to: '/dashboard', label: 'Resumen', icon: LayoutGrid, end: true },
  { to: '/dashboard/clientes', label: 'Clientes', icon: Users },
  { to: '/dashboard/casos', label: 'Casos', icon: Kanban },
  { to: '/dashboard/documentos', label: 'Documentos', icon: FolderClosed },
  { to: '/dashboard/calendario', label: 'Calendario', icon: CalendarDays },
  { to: '/dashboard/equipo', label: 'Equipo', icon: UsersRound },
]

export default function Sidebar({ mobileOpen, onClose }) {
  return (
    <>
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-navy-950/50 lg:hidden" onClick={onClose} />
      )}
      <aside
        className={`fixed z-50 flex h-full w-72 shrink-0 flex-col border-r border-navy-100 bg-white transition-transform duration-300 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex h-20 items-center gap-2.5 px-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-gold-300 shadow-soft">
            <Compass size={20} />
          </span>
          <span className="font-display text-lg font-medium tracking-tight text-navy-900">
            Horizonte <span className="text-gold-600">Global</span>
          </span>
        </div>

        <nav className="crm-scroll flex-1 space-y-1 overflow-y-auto px-4 py-4">
          <p className="px-3 pb-2 pt-2 text-[11px] font-semibold uppercase tracking-wider text-navy-300">
            Plataforma CRM
          </p>
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium transition ${
                  isActive
                    ? 'bg-navy-900 text-white shadow-soft'
                    : 'text-navy-500 hover:bg-navy-50 hover:text-navy-800'
                }`
              }
            >
              <item.icon size={18} strokeWidth={1.8} />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="space-y-1 border-t border-navy-100 px-4 py-4">
          <button className="flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium text-navy-500 transition hover:bg-navy-50 hover:text-navy-800">
            <Settings size={18} strokeWidth={1.8} />
            Configuración
          </button>
          <a
            href="/"
            className="flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium text-navy-500 transition hover:bg-navy-50 hover:text-navy-800"
          >
            <ArrowLeftCircle size={18} strokeWidth={1.8} />
            Volver al sitio
          </a>
        </div>
      </aside>
    </>
  )
}
