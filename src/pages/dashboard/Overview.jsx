import { Users, Briefcase, DollarSign, ShieldCheck } from 'lucide-react'
import StatCard from '../../components/dashboard/StatCard.jsx'
import RevenueChart from '../../components/dashboard/RevenueChart.jsx'
import DestinationBars from '../../components/dashboard/DestinationBars.jsx'
import ActivityFeed from '../../components/dashboard/ActivityFeed.jsx'
import AppointmentsCard from '../../components/dashboard/AppointmentsCard.jsx'
import { kpis } from '../../data/mockData.js'

const ICONS = [Briefcase, Users, DollarSign, ShieldCheck]

export default function Overview() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi, i) => (
          <StatCard key={kpi.label} {...kpi} icon={ICONS[i]} index={i} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RevenueChart />
        </div>
        <DestinationBars />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <AppointmentsCard />
        <ActivityFeed />
      </div>
    </div>
  )
}
