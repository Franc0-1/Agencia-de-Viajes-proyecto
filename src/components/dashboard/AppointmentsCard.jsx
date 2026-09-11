import { CalendarClock, Video, MapPin } from 'lucide-react'
import { appointments } from '../../data/mockData.js'

export default function AppointmentsCard() {
  return (
    <div className="card-surface p-6 sm:p-7">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CalendarClock size={16} className="text-gold-600" />
          <h3 className="text-sm font-semibold text-navy-900">Próximas asesorías</h3>
        </div>
        <span className="text-xs font-medium text-navy-400">{appointments.length} agendadas</span>
      </div>

      <div className="mt-6 space-y-3">
        {appointments.map((a) => (
          <div
            key={a.id}
            className="flex items-center justify-between rounded-2xl border border-navy-100 p-4 transition hover:border-navy-200"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                {a.mode.includes('Video') ? <Video size={16} /> : <MapPin size={16} />}
              </span>
              <div>
                <p className="text-sm font-semibold text-navy-900">{a.client}</p>
                <p className="text-xs text-navy-400">{a.type}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-semibold text-navy-700">{a.time}</p>
              <p className="text-[11px] text-navy-300">{a.mode}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
