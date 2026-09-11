import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { UploadCloud, FileText, X, CheckCircle2, Send, User, Mail, Phone } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext.jsx'

export default function ContactForm() {
  const { t } = useLanguage()
  const [file, setFile] = useState(null)
  const [dragging, setDragging] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const inputRef = useRef(null)

  const interests = [
    'Visa de Trabajo',
    'Visa de Estudio',
    'Programas Internacionales',
    'Asesoría Migratoria',
  ]

  function handleDrop(e) {
    e.preventDefault()
    setDragging(false)
    const dropped = e.dataTransfer.files?.[0]
    if (dropped) setFile(dropped)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="bg-navy-950 py-24 sm:py-28">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="eyebrow">{t.form.eyebrow}</span>
            <h2 className="mt-5 font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
              {t.form.title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-navy-200">{t.form.subtitle}</p>

            <div className="mt-10 space-y-4">
              {[
                { office: 'Quito, Ecuador', hours: 'Lun – Vie · 8:00 – 18:00' },
                { office: 'París, Francia', hours: 'Lun – Vie · 9:00 – 18:00 CET' },
              ].map((o) => (
                <div key={o.office} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-semibold text-white">{o.office}</div>
                  <div className="mt-1 text-xs text-navy-300">{o.hours}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-surface relative overflow-hidden p-7 sm:p-9">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckCircle2 size={30} />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold text-navy-900">¡Solicitud enviada!</h3>
                  <p className="mt-2 max-w-xs text-sm text-navy-500">
                    Un asesor de Horizonte Global se pondrá en contacto contigo pronto.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFile(null)
                    }}
                    className="btn-secondary mt-8"
                  >
                    Enviar otra solicitud
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-semibold text-navy-500">
                        {t.form.fields.name}
                      </span>
                      <div className="flex items-center gap-2 rounded-xl border border-navy-100 px-3.5 py-3 transition focus-within:border-navy-400">
                        <User size={16} className="text-navy-300" />
                        <input
                          required
                          type="text"
                          placeholder="Ana Torres"
                          className="w-full text-sm text-navy-800 outline-none placeholder:text-navy-300"
                        />
                      </div>
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-semibold text-navy-500">
                        {t.form.fields.email}
                      </span>
                      <div className="flex items-center gap-2 rounded-xl border border-navy-100 px-3.5 py-3 transition focus-within:border-navy-400">
                        <Mail size={16} className="text-navy-300" />
                        <input
                          required
                          type="email"
                          placeholder="ana@correo.com"
                          className="w-full text-sm text-navy-800 outline-none placeholder:text-navy-300"
                        />
                      </div>
                    </label>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-semibold text-navy-500">
                        {t.form.fields.phone}
                      </span>
                      <div className="flex items-center gap-2 rounded-xl border border-navy-100 px-3.5 py-3 transition focus-within:border-navy-400">
                        <Phone size={16} className="text-navy-300" />
                        <input
                          type="tel"
                          placeholder="+593 99 000 0000"
                          className="w-full text-sm text-navy-800 outline-none placeholder:text-navy-300"
                        />
                      </div>
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-semibold text-navy-500">
                        {t.form.fields.interest}
                      </span>
                      <select className="w-full rounded-xl border border-navy-100 px-3.5 py-3 text-sm text-navy-800 outline-none transition focus:border-navy-400">
                        {interests.map((opt) => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-navy-500">
                      {t.form.fields.message}
                    </span>
                    <textarea
                      rows={4}
                      placeholder="Quiero aplicar a una visa de estudio en Francia..."
                      className="w-full resize-none rounded-xl border border-navy-100 px-3.5 py-3 text-sm text-navy-800 outline-none transition focus:border-navy-400 placeholder:text-navy-300"
                    />
                  </label>

                  <div>
                    <span className="mb-1.5 block text-xs font-semibold text-navy-500">
                      {t.form.fields.upload}
                    </span>
                    <div
                      onDragOver={(e) => {
                        e.preventDefault()
                        setDragging(true)
                      }}
                      onDragLeave={() => setDragging(false)}
                      onDrop={handleDrop}
                      onClick={() => inputRef.current?.click()}
                      className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed px-4 py-8 text-center transition ${
                        dragging ? 'border-gold-400 bg-gold-50' : 'border-navy-200 bg-navy-50/60 hover:bg-navy-50'
                      }`}
                    >
                      <input
                        ref={inputRef}
                        type="file"
                        className="hidden"
                        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                      />
                      {file ? (
                        <div
                          className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-soft"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FileText size={14} className="text-navy-500" />
                          <span className="max-w-[180px] truncate text-xs font-medium text-navy-700">
                            {file.name}
                          </span>
                          <button
                            type="button"
                            onClick={() => setFile(null)}
                            className="text-navy-300 hover:text-navy-600"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      ) : (
                        <>
                          <UploadCloud size={22} className="text-navy-400" />
                          <p className="text-xs text-navy-500">
                            Arrastra tu archivo aquí o{' '}
                            <span className="font-semibold text-navy-800">selecciona uno</span>
                          </p>
                          <p className="text-[11px] text-navy-300">{t.form.fields.uploadHint}</p>
                        </>
                      )}
                    </div>
                  </div>

                  <button type="submit" className="btn-gold w-full">
                    {t.form.submit}
                    <Send size={15} />
                  </button>
                  <p className="text-center text-[11px] text-navy-400">{t.form.disclaimer}</p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
