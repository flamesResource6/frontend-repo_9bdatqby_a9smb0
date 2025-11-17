import { motion } from 'framer-motion'

const services = [
  {
    title: 'AI Diagnostic Sprint',
    bullets: [
      'Quick assessment of your AI potential',
      'Prioritization of 3–5 concrete use cases',
      'Scope, deliverables, key outcomes',
    ],
    cta: 'Request a quote',
  },
  {
    title: 'AI Roadmap',
    bullets: [
      'Process and workflow mapping',
      '3–6 month AI adoption roadmap',
      'Recommendations for tools and integrations',
    ],
    cta: 'Talk to an expert',
  },
  {
    title: 'Implementation & Training',
    bullets: [
      'Solution deployment',
      'Workshops, training, ongoing support',
      'KPI definition and performance tracking',
    ],
    cta: 'Request a quote',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0B1324] text-white py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_0%_120%,rgba(124,58,237,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-4xl font-bold">Our AI consulting services</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/75 list-disc list-inside">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <button className="mt-6 px-4 py-2 rounded-lg bg-[#22D3EE] text-[#0B1324] font-semibold hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] transition-shadow">
                {s.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
