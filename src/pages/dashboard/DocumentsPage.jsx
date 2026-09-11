import { CheckCircle2, Clock, Eye, FileText, Download } from 'lucide-react'
import { documentChecklist } from '../../data/mockData.js'

const STATUS_CONFIG = {
  Aprobado: { icon: CheckCircle2, className: 'text-emerald-600 bg-emerald-50' },
  Pendiente: { icon: Clock, className: 'text-gold-700 bg-gold-50' },
  'En revisión': { icon: Eye, className: 'text-blue-600 bg-blue-50' },
}

export default function DocumentsPage() {
  const grouped = documentChecklist.reduce((acc, doc) => {
    acc[doc.client] = acc[doc.client] || []
    acc[doc.client].push(doc)
    return acc
  }, {})

  return (
    <div className="space-y-6">
      {Object.entries(grouped).map(([client, docs]) => (
        <div key={client} className="card-surface p-6 sm:p-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-100 text-xs font-semibold text-navy-700">
                {client
                  .split(' ')
                  .slice(0, 2)
                  .map((n) => n[0])
                  .join('')}
              </span>
              <h3 className="text-sm font-semibold text-navy-900">{client}</h3>
            </div>
            <span className="text-xs font-medium text-navy-400">
              {docs.filter((d) => d.status === 'Aprobado').length}/{docs.length} completados
            </span>
          </div>

          <div className="mt-5 divide-y divide-navy-50">
            {docs.map((doc) => {
              const config = STATUS_CONFIG[doc.status]
              const Icon = config.icon
              return (
                <div key={doc.id} className="flex items-center justify-between gap-3 py-3.5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy-50 text-navy-400">
                      <FileText size={16} />
                    </span>
                    <span className="text-sm text-navy-700">{doc.document}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${config.className}`}
                    >
                      <Icon size={12} />
                      {doc.status}
                    </span>
                    <button className="text-navy-300 transition hover:text-navy-700">
                      <Download size={16} />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
