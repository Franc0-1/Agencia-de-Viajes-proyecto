import { motion } from 'framer-motion'
import { ArrowRight, PlaneTakeoff, CheckCircle2, FileCheck2, MapPin, Sparkles } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="relative overflow-hidden bg-white pb-24 pt-16 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-navy-50 blur-3xl" />

      <div className="section-container relative grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0} className="eyebrow">
            <Sparkles size={13} />
            {t.hero.eyebrow}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-6 font-display text-4xl font-medium leading-[1.08] tracking-tight text-navy-900 sm:text-5xl lg:text-[3.4rem]"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-xl text-lg leading-relaxed text-navy-500"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a href="#contacto" className="btn-primary">
              {t.hero.ctaPrimary}
              <ArrowRight size={16} />
            </a>
            <a href="#servicios" className="btn-secondary">
              {t.hero.ctaSecondary}
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-14 grid grid-cols-3 gap-6 border-t border-navy-100 pt-8"
          >
            {t.hero.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-medium text-navy-900">{stat.value}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-navy-400 sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-navy-gradient opacity-95 blur-0 sm:-inset-10" />
          <div className="relative rounded-[2rem] bg-navy-gradient p-8 shadow-elevated sm:p-10">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
                <MapPin size={12} className="text-gold-300" />
                {t.hero.badge}
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-gradient text-navy-900">
                <PlaneTakeoff size={16} />
              </span>
            </div>

            <div className="mt-10 space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex items-center justify-between rounded-2xl bg-white/95 p-4 shadow-soft"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <CheckCircle2 size={18} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-navy-900">Visa de Estudio</div>
                    <div className="text-xs text-navy-400">Francia · Aprobada</div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-600">100%</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.75, duration: 0.5 }}
                className="flex items-center justify-between rounded-2xl bg-white/95 p-4 shadow-soft"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-50 text-gold-600">
                    <FileCheck2 size={18} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-navy-900">Gestión documental</div>
                    <div className="text-xs text-navy-400">Canadá · En progreso</div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-gold-600">72%</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur"
              >
                <div className="flex items-center justify-between text-white">
                  <span className="text-sm font-medium">Próxima asesoría</span>
                  <span className="text-xs text-gold-300">Hoy · 10:00</span>
                </div>
                <div className="mt-3 flex -space-x-2">
                  {['AB', 'CR', 'JM'].map((initials) => (
                    <span
                      key={initials}
                      className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-navy-800 bg-navy-600 text-[11px] font-semibold text-white"
                    >
                      {initials}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-6 -top-6 hidden rounded-2xl border border-navy-100 bg-white px-4 py-3 shadow-card sm:block"
          >
            <div className="text-xs font-medium text-navy-400">Satisfacción</div>
            <div className="font-display text-2xl font-medium text-navy-900">95%</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
