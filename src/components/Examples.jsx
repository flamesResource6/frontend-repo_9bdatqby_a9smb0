import { motion } from 'framer-motion'
import { Bot, FileText, Sparkles, BarChart3, Headset, Workflow } from 'lucide-react'

const examples = [
  { icon: Workflow, text: 'Automate your lead management' },
  { icon: FileText, text: 'Speed up content production for marketing' },
  { icon: Sparkles, text: 'Create internal copilots for your teams' },
  { icon: BarChart3, text: 'Optimize financial reporting' },
  { icon: Headset, text: 'Enhance customer support with smart chatbots and FAQs' },
  { icon: Bot, text: 'Scale intelligent assistance across departments' },
]

export default function Examples() {
  return (
    <section className="relative bg-[#0A1220] text-white py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_80%_-10%,rgba(124,58,237,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-4xl font-bold">What AI can do for your business</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {examples.map(({ icon: Icon, text }, idx) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.04 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur flex items-center gap-3"
            >
              <div className="p-2 rounded-lg bg-white/5 border border-white/10"><Icon className="text-[#FFD873]" size={20} /></div>
              <p className="text-sm text-white/80">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
