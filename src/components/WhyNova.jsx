import { motion } from 'framer-motion'
import { Balance, GraduationCap, TrendingUp, Users } from 'lucide-react'

const items = [
  { title: 'Tool-agnostic', desc: 'We recommend what truly fits your needs, not what pays us a commission.', icon: Balance },
  { title: 'Educational approach', desc: 'We make AI understandable for your teams.', icon: GraduationCap },
  { title: 'ROI-driven', desc: 'We talk time saved, cost reduction and revenue growth, not just technology.', icon: TrendingUp },
  { title: 'Human support', desc: 'Workshops, training and ongoing assistance.', icon: Users },
]

export default function WhyNova() {
  return (
    <section className="relative bg-[#0B1324] text-white py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_10%_-10%,rgba(34,211,238,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-4xl font-bold">Why choose NOVA?</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ title, desc, icon: Icon }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10"><Icon className="text-cyan-300" size={20} /></div>
                <h3 className="font-semibold">{title}</h3>
              </div>
              <p className="text-sm text-white/75 mt-3">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
