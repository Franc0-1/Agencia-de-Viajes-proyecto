import { Activity } from 'lucide-react'
import { activity } from '../../data/mockData.js'

export default function ActivityFeed() {
  return (
    <div className="card-surface p-6 sm:p-7">
      <div className="flex items-center gap-2">
        <Activity size={16} className="text-gold-600" />
        <h3 className="text-sm font-semibold text-navy-900">Actividad reciente</h3>
      </div>

      <ul className="mt-6 space-y-5">
        {activity.map((item, i) => (
          <li key={item.id} className="relative flex gap-3 pl-4">
            <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-navy-700" />
            {i !== activity.length - 1 && (
              <span className="absolute left-[3px] top-4 h-full w-px bg-navy-100" />
            )}
            <div>
              <p className="text-sm leading-snug text-navy-700">{item.text}</p>
              <p className="mt-1 text-xs text-navy-300">{item.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
