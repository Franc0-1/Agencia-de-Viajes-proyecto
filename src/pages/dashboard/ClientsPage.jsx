import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal, ChevronRight } from 'lucide-react'
import StatusBadge from '../../components/dashboard/StatusBadge.jsx'
import { clients, officeOptions } from '../../data/mockData.js'

const FILTERS = ['Todos', 'Nuevo', 'Documentación', 'Radicado', 'Aprobado']

export default function ClientsPage() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('Todos')

  const filtered = useMemo(() => {
    return clients.filter((c) => {
      const matchesQuery = c.name.toLowerCase().includes(query.toLowerCase())
      const matchesFilter = filter === 'Todos' || c.status === filter
      return matchesQuery && matchesFilter
    })
  }, [query, filter])

  return (
    <div className="space-y-6">
      <div className="card-surface p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 rounded-full border border-navy-100 bg-navy-50/60 px-4 py-2.5 sm:max-w-sm">
            <Search size={16} className="text-navy-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Buscar por nombre..."
              className="w-full bg-transparent text-sm text-navy-700 outline-none placeholder:text-navy-300"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <SlidersHorizontal size={15} className="hidden text-navy-400 sm:block" />
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition ${
                  filter === f
                    ? 'bg-navy-900 text-white'
                    : 'bg-navy-50 text-navy-500 hover:bg-navy-100'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="card-surface overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-navy-100 text-xs uppercase tracking-wide text-navy-400">
                <th className="px-6 py-4 font-semibold">Cliente</th>
                <th className="px-6 py-4 font-semibold">Servicio</th>
                <th className="px-6 py-4 font-semibold">Destino</th>
                <th className="px-6 py-4 font-semibold">Oficina</th>
                <th className="px-6 py-4 font-semibold">Progreso</th>
                <th className="px-6 py-4 font-semibold">Estado</th>
                <th className="px-6 py-4 font-semibold">Asesor</th>
                <th className="px-6 py-4" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => {
                const office = officeOptions.find((o) => o.id === c.office)
                return (
                  <tr
                    key={c.id}
                    className="border-b border-navy-50 transition last:border-0 hover:bg-navy-50/50"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-100 text-xs font-semibold text-navy-700">
                          {c.name
                            .split(' ')
                            .slice(0, 2)
                            .map((n) => n[0])
                            .join('')}
                        </span>
                        <div>
                          <p className="font-medium text-navy-900">{c.name}</p>
                          <p className="text-xs text-navy-400">{c.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-navy-600">{c.service}</td>
                    <td className="px-6 py-4 text-navy-600">{c.destination}</td>
                    <td className="px-6 py-4 text-navy-600">
                      <span className="inline-flex items-center gap-1.5">
                        {office?.flag} <span className="hidden sm:inline">{office?.label.split(',')[0]}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-20 overflow-hidden rounded-full bg-navy-50">
                          <div
                            className="h-full rounded-full bg-gold-gradient"
                            style={{ width: `${c.progress}%` }}
                          />
                        </div>
                        <span className="text-xs font-medium text-navy-500">{c.progress}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={c.status} />
                    </td>
                    <td className="px-6 py-4 text-navy-600">{c.advisor}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-navy-300 transition hover:text-navy-700">
                        <ChevronRight size={18} />
                      </button>
                    </td>
                  </tr>
                )
              })}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-6 py-10 text-center text-sm text-navy-400">
                    No se encontraron clientes con estos filtros.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
