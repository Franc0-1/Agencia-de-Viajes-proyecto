import { ChevronLeft, ChevronRight, Video, MapPin } from 'lucide-react'
import { appointments } from '../../data/mockData.js'

const WEEKDAYS = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']

const WEEKS = [
  [null, 1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12, 13],
  [14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27],
  [28, 29, 30, null, null, null, null],
]

const EVENT_DAYS = { 11: 2, 12: 1, 15: 1, 18: 1, 24: 1 }
const TODAY = 11

export default function CalendarPage() {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.6fr_1fr]">
      <div className="card-surface p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg font-medium text-navy-900">Septiembre 2026</h3>
          <div className="flex items-center gap-2">
            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-navy-100 text-navy-500 hover:border-navy-300">
              <ChevronLeft size={15} />
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-navy-100 text-navy-500 hover:border-navy-300">
              <ChevronRight size={15} />
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-7 gap-2 text-center text-xs font-semibold uppercase tracking-wide text-navy-300">
          {WEEKDAYS.map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        <div className="mt-2 grid grid-cols-7 gap-2">
          {WEEKS.flat().map((day, i) => (
            <div
              key={i}
              className={`flex aspect-square flex-col items-center justify-center gap-1 rounded-xl text-sm ${
                day === null
                  ? ''
                  : day === TODAY
                  ? 'bg-navy-900 font-semibold text-white shadow-soft'
                  : 'text-navy-600 hover:bg-navy-50'
              }`}
            >
              {day}
              {day !== null && EVENT_DAYS[day] && (
                <span
                  className={`h-1.5 w-1.5 rounded-full ${day === TODAY ? 'bg-gold-300' : 'bg-gold-500'}`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="card-surface p-6 sm:p-7">
        <h3 className="text-sm font-semibold text-navy-900">Agenda de hoy</h3>
        <p className="text-xs text-navy-400">Viernes, 11 de septiembre</p>

        <div className="mt-5 space-y-3">
          {appointments.map((a) => (
            <div key={a.id} className="rounded-2xl border border-navy-100 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-gold-700">{a.time}</span>
                <span className="flex items-center gap-1 text-xs text-navy-400">
                  {a.mode.includes('Video') ? <Video size={12} /> : <MapPin size={12} />}
                  {a.mode}
                </span>
              </div>
              <p className="mt-2 text-sm font-semibold text-navy-900">{a.client}</p>
              <p className="text-xs text-navy-400">{a.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
