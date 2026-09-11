import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Globe2, ShieldCheck, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext.jsx'

const ICONS = [Briefcase, GraduationCap, Globe2, ShieldCheck]
const ACCENTS = [
  'bg-navy-900 text-gold-300',
  'bg-gold-gradient text-navy-900',
  'bg-navy-100 text-navy-700',
  'bg-navy-900 text-gold-300',
]

export default function Services() {
  const { t } = useLanguage()

  return (
    <section id="servicios" className="bg-mist-50 py-24 sm:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t.services.eyebrow}</span>
          <h2 className="mt-5 font-display text-3xl font-medium tracking-tight text-navy-900 sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-500">{t.services.subtitle}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((service, i) => {
            const Icon = ICONS[i]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group card-surface flex flex-col p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elevated"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${ACCENTS[i]} shadow-soft`}
                >
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-navy-900">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-500">{service.description}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Saber más <ArrowUpRight size={14} />
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
