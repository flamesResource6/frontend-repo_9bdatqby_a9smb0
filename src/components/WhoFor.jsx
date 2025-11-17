import { motion } from 'framer-motion'

const profiles = [
  {
    title: 'CEO / Founder',
    points: [
      'Need clarity on where AI drives ROI',
      'Avoid risky bets and hype cycles',
      'Get quick wins that build momentum',
    ],
  },
  {
    title: 'Marketing & Sales Manager',
    points: [
      'Scale content and campaigns without scaling headcount',
      'Automate lead capture, scoring and follow-up',
      'Improve conversion with personalization',
    ],
  },
  {
    title: 'Operations / HR Manager',
    points: [
      'Reduce manual, repetitive tasks',
      'Upskill teams with practical training',
      'Standardize processes and documentation',
    ],
  },
  {
    title: 'IT / Innovation Manager',
    points: [
      'Integrate tools safely and securely',
      'Keep governance and privacy under control',
      'Build internal copilots that truly help',
    ],
  },
]

export default function WhoFor() {
  return (
    <section id="who" className="relative bg-[#0A1220] text-white py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_-10%,rgba(34,211,238,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-4xl font-bold">Who is NOVA for?</h2>
        <p className="text-white/70 mt-3 max-w-2xl">For SMEs, startups and growing organizations that want to structure their AI adoption.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {profiles.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <h3 className="font-semibold">{p.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/75 list-disc list-inside">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
