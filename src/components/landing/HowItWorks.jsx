import { motion } from 'framer-motion'
import { ClipboardList, Route, FolderCheck, Send, Plane } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext.jsx'

const ICONS = [ClipboardList, Route, FolderCheck, Send, Plane]

export default function HowItWorks() {
  const { t } = useLanguage()

  return (
    <section id="proceso" className="bg-white py-24 sm:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t.how.eyebrow}</span>
          <h2 className="mt-5 font-display text-3xl font-medium tracking-tight text-navy-900 sm:text-4xl">
            {t.how.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-500">{t.how.subtitle}</p>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-6 top-0 h-full w-px bg-navy-100 lg:left-1/2 lg:-translate-x-1/2" />

          <div className="space-y-12 lg:space-y-16">
            {t.how.steps.map((step, i) => {
              const Icon = ICONS[i]
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex items-start gap-6 pl-16 lg:w-1/2 lg:pl-0 ${
                    isEven ? 'lg:pr-16 lg:text-right' : 'lg:ml-auto lg:pl-16'
                  }`}
                >
                  <span
                    className={`absolute left-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-gold-300 shadow-soft lg:left-auto ${
                      isEven ? 'lg:-right-6' : 'lg:-left-6'
                    }`}
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <div className={`card-surface w-full p-6 ${isEven ? 'lg:ml-auto' : ''}`}>
                    <div className="text-xs font-semibold uppercase tracking-wide text-gold-600">
                      Paso {i + 1}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-navy-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-500">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
