import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../../components/dashboard/Sidebar.jsx'
import Topbar from '../../components/dashboard/Topbar.jsx'

const TITLES = {
  '/dashboard': { title: 'Resumen general', subtitle: 'Vista global de la operación · Horizonte Global' },
  '/dashboard/clientes': { title: 'Clientes', subtitle: 'Gestión de clientes y expedientes activos' },
  '/dashboard/casos': { title: 'Casos', subtitle: 'Pipeline de procesos migratorios' },
  '/dashboard/documentos': { title: 'Documentos', subtitle: 'Checklist documental por cliente' },
  '/dashboard/calendario': { title: 'Calendario', subtitle: 'Asesorías y citas programadas' },
  '/dashboard/equipo': { title: 'Equipo', subtitle: 'Asesores en Quito y París' },
}

export default function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const meta = TITLES[location.pathname] ?? TITLES['/dashboard']

  return (
    <div className="flex min-h-screen bg-mist-50">
      <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <Topbar title={meta.title} subtitle={meta.subtitle} onMenuClick={() => setMobileOpen(true)} />
        <main className="flex-1 px-5 py-6 sm:px-8 sm:py-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
