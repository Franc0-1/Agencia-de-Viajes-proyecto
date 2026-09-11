import { motion } from 'framer-motion'
import { Star, ShieldCheck } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext.jsx'

const snippets = [
  { name: 'Andrés P.', text: 'Proceso impecable y muy bien explicado desde el día uno.' },
  { name: 'Valentina R.', text: 'Excelente acompañamiento en cada etapa del visado.' },
  { name: 'Kevin M.', text: 'Profesionales, puntuales y muy transparentes con los costos.' },
]

export default function GoogleReviews() {
  const { t } = useLanguage()

  return (
    <section className="bg-mist-50 py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="card-surface flex flex-col gap-8 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="flex items-center gap-5">
            <span className="grid h-14 w-14 flex-shrink-0 grid-cols-2 grid-rows-2 overflow-hidden rounded-2xl shadow-soft">
              <span className="bg-navy-600" />
              <span className="bg-gold-500" />
              <span className="bg-emerald-500" />
              <span className="bg-navy-900" />
            </span>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-navy-400">
                {t.reviews.eyebrow}
              </div>
              <h3 className="mt-1 text-lg font-semibold text-navy-900">{t.reviews.title}</h3>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex gap-0.5 text-gold-500">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <span className="text-sm font-semibold text-navy-900">{t.reviews.rating}</span>
                <span className="text-sm text-navy-400">· {t.reviews.total}</span>
              </div>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-3 lg:max-w-xl">
            {snippets.map((s) => (
              <div key={s.name} className="rounded-2xl border border-navy-100 bg-white p-4">
                <div className="flex gap-0.5 text-gold-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={11} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-navy-500">“{s.text}”</p>
                <div className="mt-3 flex items-center gap-1 text-xs font-medium text-navy-700">
                  <ShieldCheck size={12} className="text-emerald-500" />
                  {s.name}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
