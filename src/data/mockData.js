export const officeOptions = [
  { id: 'quito', label: 'Quito, Ecuador', flag: '🇪🇨' },
  { id: 'paris', label: 'París, Francia', flag: '🇫🇷' },
]

export const kpis = [
  { label: 'Casos activos', value: '184', delta: '+12%', trend: 'up' },
  { label: 'Clientes nuevos (mes)', value: '37', delta: '+8%', trend: 'up' },
  { label: 'Ingresos del mes', value: '$48,200', delta: '+15%', trend: 'up' },
  { label: 'Tasa de aprobación', value: '95%', delta: '+2%', trend: 'up' },
]

export const pipelineStages = [
  {
    id: 'nuevo',
    title: 'Nuevo contacto',
    color: 'bg-navy-300',
    cases: [
      { id: 'C-1042', client: 'Andrea Beltrán', service: 'Visa Estudio · Francia', value: '$1,200', avatar: 'AB' },
      { id: 'C-1043', client: 'Jorge Iván Ruiz', service: 'Visa Trabajo · Canadá', value: '$1,800', avatar: 'JR' },
      { id: 'C-1044', client: 'Paula Nieto', service: 'Asesoría General', value: '$600', avatar: 'PN' },
    ],
  },
  {
    id: 'documentos',
    title: 'Gestión documental',
    color: 'bg-gold-400',
    cases: [
      { id: 'C-1031', client: 'Esteban Molina', service: 'Programa UPR · Australia', value: '$2,400', avatar: 'EM' },
      { id: 'C-1032', client: 'Camila Torres', service: 'Visa Estudio · Alemania', value: '$1,500', avatar: 'CT' },
    ],
  },
  {
    id: 'radicado',
    title: 'Radicado en consulado',
    color: 'bg-navy-500',
    cases: [
      { id: 'C-1018', client: 'Diego Fernando Vela', service: 'Visa Trabajo · Francia', value: '$2,100', avatar: 'DV' },
      { id: 'C-1019', client: 'Sofía Cárdenas', service: 'Visa Estudio · Canadá', value: '$1,650', avatar: 'SC' },
      { id: 'C-1020', client: 'Martín Aguilar', service: 'Visa Trabajo · Alemania', value: '$1,950', avatar: 'MA' },
    ],
  },
  {
    id: 'aprobado',
    title: 'Aprobado',
    color: 'bg-emerald-500',
    cases: [
      { id: 'C-0994', client: 'Lucía Paredes', service: 'Programa UPR · Australia', value: '$2,400', avatar: 'LP' },
      { id: 'C-0995', client: 'Carlos Salazar', service: 'Visa Trabajo · Canadá', value: '$1,800', avatar: 'CS' },
    ],
  },
]

export const clients = [
  {
    id: 'CL-2201',
    name: 'María Fernanda Ortiz',
    email: 'mf.ortiz@example.com',
    service: 'Visa Estudio',
    destination: 'Francia',
    office: 'quito',
    status: 'En proceso',
    progress: 72,
    advisor: 'Camila Reyes',
    updated: 'Hace 2 días',
  },
  {
    id: 'CL-2202',
    name: 'Carlos Andrés Salazar',
    email: 'c.salazar@example.com',
    service: 'Visa Trabajo',
    destination: 'Canadá',
    office: 'quito',
    status: 'Aprobado',
    progress: 100,
    advisor: 'Julien Marchand',
    updated: 'Hace 5 días',
  },
  {
    id: 'CL-2203',
    name: 'Lucía Paredes',
    email: 'l.paredes@example.com',
    service: 'Programa UPR',
    destination: 'Australia',
    office: 'paris',
    status: 'Aprobado',
    progress: 100,
    advisor: 'Camila Reyes',
    updated: 'Hace 1 semana',
  },
  {
    id: 'CL-2204',
    name: 'Esteban Molina',
    email: 'e.molina@example.com',
    service: 'Programa UPR',
    destination: 'Australia',
    office: 'quito',
    status: 'Documentación',
    progress: 45,
    advisor: 'Andrea Suárez',
    updated: 'Hace 1 día',
  },
  {
    id: 'CL-2205',
    name: 'Camila Torres',
    email: 'c.torres@example.com',
    service: 'Visa Estudio',
    destination: 'Alemania',
    office: 'paris',
    status: 'Documentación',
    progress: 38,
    advisor: 'Julien Marchand',
    updated: 'Hace 3 días',
  },
  {
    id: 'CL-2206',
    name: 'Diego Fernando Vela',
    email: 'd.vela@example.com',
    service: 'Visa Trabajo',
    destination: 'Francia',
    office: 'quito',
    status: 'Radicado',
    progress: 85,
    advisor: 'Camila Reyes',
    updated: 'Hoy',
  },
  {
    id: 'CL-2207',
    name: 'Sofía Cárdenas',
    email: 's.cardenas@example.com',
    service: 'Visa Estudio',
    destination: 'Canadá',
    office: 'paris',
    status: 'Radicado',
    progress: 80,
    advisor: 'Andrea Suárez',
    updated: 'Hace 4 días',
  },
  {
    id: 'CL-2208',
    name: 'Jorge Iván Ruiz',
    email: 'j.ruiz@example.com',
    service: 'Visa Trabajo',
    destination: 'Canadá',
    office: 'quito',
    status: 'Nuevo',
    progress: 12,
    advisor: 'Julien Marchand',
    updated: 'Hace 6 horas',
  },
]

export const appointments = [
  { id: 1, client: 'Andrea Beltrán', type: 'Primera asesoría', time: 'Hoy · 10:00', mode: 'Videollamada' },
  { id: 2, client: 'Esteban Molina', type: 'Revisión de documentos', time: 'Hoy · 14:30', mode: 'Presencial · Quito' },
  { id: 3, client: 'Camila Torres', type: 'Seguimiento de caso', time: 'Mañana · 09:00', mode: 'Videollamada' },
  { id: 4, client: 'Jorge Iván Ruiz', type: 'Primera asesoría', time: 'Mañana · 16:00', mode: 'Presencial · París' },
]

export const activity = [
  { id: 1, text: 'Diego Fernando Vela subió su pasaporte escaneado', time: 'Hace 30 min' },
  { id: 2, text: 'Se aprobó la Visa de Trabajo de Carlos Andrés Salazar', time: 'Hace 2 horas' },
  { id: 3, text: 'Nuevo lead: Paula Nieto solicitó asesoría general', time: 'Hace 5 horas' },
  { id: 4, text: 'Camila Reyes agendó una videollamada con Andrea Beltrán', time: 'Hace 1 día' },
]

export const documentChecklist = [
  { id: 1, client: 'María Fernanda Ortiz', document: 'Pasaporte vigente', status: 'Aprobado' },
  { id: 2, client: 'María Fernanda Ortiz', document: 'Carta de aceptación', status: 'Aprobado' },
  { id: 3, client: 'María Fernanda Ortiz', document: 'Certificado de fondos', status: 'Pendiente' },
  { id: 4, client: 'Esteban Molina', document: 'Hoja de vida', status: 'En revisión' },
  { id: 5, client: 'Esteban Molina', document: 'Certificado de antecedentes', status: 'Pendiente' },
  { id: 6, client: 'Camila Torres', document: 'Título profesional apostillado', status: 'Aprobado' },
]

export const revenueByMonth = [
  { month: 'Abr', value: 28 },
  { month: 'May', value: 34 },
  { month: 'Jun', value: 31 },
  { month: 'Jul', value: 42 },
  { month: 'Ago', value: 39 },
  { month: 'Sep', value: 48 },
]

export const casesByDestination = [
  { destination: 'Francia', value: 34, color: 'bg-navy-600' },
  { destination: 'Canadá', value: 28, color: 'bg-gold-400' },
  { destination: 'Alemania', value: 18, color: 'bg-navy-400' },
  { destination: 'Australia', value: 20, color: 'bg-navy-300' },
]

export const team = [
  { name: 'Camila Reyes', role: 'Directora · Quito', cases: 42, avatar: 'CR' },
  { name: 'Julien Marchand', role: 'Director · París', cases: 38, avatar: 'JM' },
  { name: 'Andrea Suárez', role: 'Asesora Migratoria', cases: 29, avatar: 'AS' },
  { name: 'Mateo Villacís', role: 'Gestor Documental', cases: 24, avatar: 'MV' },
]
