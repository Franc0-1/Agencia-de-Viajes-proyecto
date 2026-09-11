import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext.jsx'

export default function Testimonials() {
  const { t } = useLanguage()

  return (
    <section id="testimonios" className="bg-white py-24 sm:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t.testimonials.eyebrow}</span>
          <h2 className="mt-5 font-display text-3xl font-medium tracking-tight text-navy-900 sm:text-4xl">
            {t.testimonials.title}
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.testimonials.items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-surface flex flex-col p-7"
            >
              <Quote className="text-gold-400" size={28} strokeWidth={1.5} />
              <div className="mt-4 flex gap-0.5 text-gold-500">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-navy-600">“{item.quote}”</p>
              <div className="mt-6 flex items-center gap-3 border-t border-navy-100 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-100 text-sm font-semibold text-navy-700">
                  {item.name
                    .split(' ')
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join('')}
                </span>
                <div>
                  <div className="text-sm font-semibold text-navy-900">{item.name}</div>
                  <div className="text-xs text-navy-400">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
