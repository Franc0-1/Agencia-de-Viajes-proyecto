import { Compass, Instagram, Linkedin, Facebook, MapPin } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-navy-950 pt-16 text-navy-300">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-gold-300">
                <Compass size={20} />
              </span>
              <span className="font-display text-xl font-medium text-white">
                Horizonte <span className="text-gold-400">Global</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-300">{t.footer.description}</p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-navy-300 transition hover:border-gold-400 hover:text-gold-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {t.footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-navy-300 transition hover:text-gold-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-semibold text-white">Oficinas</h4>
            <ul className="mt-4 space-y-4">
              {t.footer.offices.map((office) => (
                <li key={office.city} className="flex gap-2.5">
                  <MapPin size={15} className="mt-0.5 flex-shrink-0 text-gold-400" />
                  <div>
                    <div className="text-sm font-medium text-white">{office.city}</div>
                    <div className="text-xs text-navy-400">{office.address}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 text-xs text-navy-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Horizonte Global. {t.footer.rights}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold-300">
              Términos
            </a>
            <a href="#" className="hover:text-gold-300">
              Privacidad
            </a>
            <a href="#" className="hover:text-gold-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
