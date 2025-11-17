import { motion } from 'framer-motion'
import { Search, Sparkles, Rocket, LineChart } from 'lucide-react'

const steps = [
  {
    title: 'Diagnose',
    desc: 'We analyze your business, processes and data.',
    icon: Search,
  },
  {
    title: 'Recommend',
    desc: 'We select the most relevant AI tools for your use cases (no-code, copilots, automation, etc.).',
    icon: Sparkles,
  },
  {
    title: 'Implement & train',
    desc: 'We deploy the solutions and train your teams.',
    icon: Rocket,
  },
  {
    title: 'Monitor & optimize',
    desc: 'We track impact and continuously improve your AI usage.',
    icon: LineChart,
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative bg-[#0B1324] text-white py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_20%_-10%,rgba(124,58,237,0.15),transparent),radial-gradient(800px_400px_at_100%_120%,rgba(34,211,238,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-4xl font-bold">How NOVA works</h2>
        <p className="text-white/70 mt-3 max-w-2xl">A clear, guided journey from idea to impact.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map(({ title, desc, icon: Icon }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/7 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <Icon className="text-cyan-300" size={20} />
                </div>
                <h3 className="font-semibold">{title}</h3>
              </div>
              <p className="text-sm text-white/70 mt-3">{desc}</p>
              <a href="#contact" className="text-xs text-cyan-300 hover:text-cyan-200 mt-4 inline-flex items-center">Learn more →</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
