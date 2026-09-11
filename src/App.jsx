import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import DashboardLayout from './pages/dashboard/DashboardLayout.jsx'
import Overview from './pages/dashboard/Overview.jsx'
import ClientsPage from './pages/dashboard/ClientsPage.jsx'
import CasesPage from './pages/dashboard/CasesPage.jsx'
import DocumentsPage from './pages/dashboard/DocumentsPage.jsx'
import CalendarPage from './pages/dashboard/CalendarPage.jsx'
import TeamPage from './pages/dashboard/TeamPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Overview />} />
        <Route path="clientes" element={<ClientsPage />} />
        <Route path="casos" element={<CasesPage />} />
        <Route path="documentos" element={<DocumentsPage />} />
        <Route path="calendario" element={<CalendarPage />} />
        <Route path="equipo" element={<TeamPage />} />
      </Route>
    </Routes>
  )
}
