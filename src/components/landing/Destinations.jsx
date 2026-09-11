import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext.jsx'

const VISUALS = [
  { gradient: 'from-navy-700 via-navy-600 to-navy-800', flag: '🇫🇷' },
  { gradient: 'from-navy-800 via-navy-600 to-gold-600/70', flag: '🇨🇦' },
  { gradient: 'from-navy-900 via-navy-700 to-navy-500', flag: '🇩🇪' },
  { gradient: 'from-gold-600 via-navy-700 to-navy-900', flag: '🇦🇺' },
]

export default function Destinations() {
  const { t } = useLanguage()

  return (
    <section id="destinos" className="bg-mist-50 py-24 sm:py-28">
      <div className="section-container">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="eyebrow">{t.destinations.eyebrow}</span>
            <h2 className="mt-5 font-display text-3xl font-medium tracking-tight text-navy-900 sm:text-4xl">
              {t.destinations.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-500">{t.destinations.subtitle}</p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.destinations.items.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl shadow-card"
            >
              <div
                className={`relative flex h-64 flex-col justify-between bg-gradient-to-br ${VISUALS[i].gradient} p-6 transition-transform duration-500 group-hover:scale-[1.03]`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{VISUALS[i].flag}</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition group-hover:bg-white/25">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wide text-white/70">{dest.tag}</div>
                  <h3 className="mt-1 font-display text-2xl font-medium text-white">{dest.name}</h3>
                  <div className="mt-1 text-xs text-gold-200">{dest.programs}</div>
                </div>
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
