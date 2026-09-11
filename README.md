# Horizonte Global — Demo Visual

Demo de alta fidelidad (solo frontend, sin backend ni lógica real) para presentar a un cliente de una agencia de viajes/migración internacional con oficinas en Ecuador y Francia.

Incluye:

- **Landing pública** (`/`) — header con selector de idioma ES/EN/FR, hero, servicios, proceso, destinos, testimonios, reseñas de Google (simuladas), formulario de contacto (visual, con carga de archivo simulada) y footer.
- **Dashboard CRM** (`/dashboard`) — resumen con KPIs, ingresos, distribución por destino, agenda y actividad; además de páginas de Clientes, Casos (kanban), Documentos, Calendario y Equipo.

Todos los datos son de ejemplo (`src/data/`). No hay backend, base de datos ni llamadas a APIs.

## Stack

React + Vite, Tailwind CSS, Framer Motion, Lucide Icons, React Router.

## Cómo correrlo

Este entorno no tiene Node.js instalado, por lo que el proyecto no fue instalado ni ejecutado aquí. En tu máquina (con Node 18+):

```bash
npm install
npm run dev
```

Luego abre `http://localhost:5173`.

## Estructura

```
src/
  components/landing/   Secciones de la landing
  components/dashboard/ Componentes del CRM (sidebar, topbar, cards, tablas)
  context/               Selector de idioma (ES/EN/FR)
  data/                  Contenido y datos de ejemplo
  pages/                 Landing.jsx y páginas del dashboard
```
