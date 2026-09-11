import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Compass, LayoutDashboard } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext.jsx'

const LANGS = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
]

function LanguageSwitcher({ compact }) {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        className={`flex items-center gap-1.5 rounded-full border border-navy-100 px-3 py-2 text-sm font-medium text-navy-700 transition hover:border-navy-300 ${
          compact ? 'w-full justify-between' : ''
        }`}
      >
        <span className="tracking-wide">{LANGS.find((l) => l.code === lang)?.label}</span>
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 z-50 mt-2 w-28 overflow-hidden rounded-xl border border-navy-100 bg-white shadow-card"
          >
            {LANGS.map((l) => (
              <button
                key={l.code}
                onMouseDown={() => {
                  setLang(l.code)
                  setOpen(false)
                }}
                className={`block w-full px-4 py-2.5 text-left text-sm transition hover:bg-navy-50 ${
                  lang === l.code ? 'font-semibold text-navy-900' : 'text-navy-600'
                }`}
              >
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Header() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: t.nav.services, href: '#servicios' },
    { label: t.nav.how, href: '#proceso' },
    { label: t.nav.destinations, href: '#destinos' },
    { label: t.nav.testimonials, href: '#testimonios' },
    { label: t.nav.contact, href: '#contacto' },
  ]

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? 'bg-white/85 shadow-soft backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="section-container flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-gold-300 shadow-soft">
            <Compass size={20} strokeWidth={2} />
          </span>
          <span className="font-display text-xl font-medium tracking-tight text-navy-900">
            Horizonte <span className="text-gold-600">Global</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy-600 transition hover:text-navy-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/dashboard"
            className="flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium text-navy-400 transition hover:text-navy-700"
            title="Vista previa del CRM"
          >
            <LayoutDashboard size={14} />
            CRM Demo
          </Link>
          <LanguageSwitcher />
          <a href="#contacto" className="btn-primary">
            {t.nav.cta}
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-100 lg:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-navy-100 bg-white lg:hidden"
          >
            <div className="section-container flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-navy-700 hover:bg-navy-50"
                >
                  {item.label}
                </a>
              ))}
              <Link
                to="/dashboard"
                className="flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-medium text-navy-500 hover:bg-navy-50"
              >
                <LayoutDashboard size={16} />
                CRM Demo
              </Link>
              <div className="flex items-center justify-between gap-3 px-3 py-2">
                <LanguageSwitcher compact />
              </div>
              <a href="#contacto" className="btn-primary mt-2 w-full">
                {t.nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
