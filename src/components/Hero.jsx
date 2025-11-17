import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] w-full overflow-hidden bg-[#0A1220] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1220]/40 via-[#0A1220]/40 to-[#0A1220] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-28 pb-16 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-7">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold leading-tight text-white/95"
          >
            Scale your business with AI, without getting lost in the technology.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-white/70 text-base md:text-lg max-w-2xl"
          >
            NOVA analyzes your needs and recommends the best AI solutions, then helps you deploy them in your company.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md max-w-xl"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Describe your company in a few words…"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
              />
              <button className="px-5 py-3 rounded-xl bg-cyan-400/90 hover:bg-cyan-400 text-[#0B1324] font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] transition-colors">
                Start my AI diagnostic
              </button>
            </div>
            <div className="mt-3 text-sm text-white/70">
              Or <a href="#contact" className="text-cyan-300 hover:text-cyan-200 underline decoration-cyan-500/50">book a call with an AI consultant</a>
            </div>
          </motion.div>
        </div>

        <div className="md:col-span-5">
          <div className="h-64 md:h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur relative overflow-hidden">
            <div className="absolute inset-0 opacity-80 bg-[radial-gradient(1200px_400px_at_50%_-20%,rgba(124,58,237,0.25),transparent),radial-gradient(600px_300px_at_80%_120%,rgba(34,211,238,0.2),transparent)]" />
            <div className="relative p-4 h-full flex flex-col gap-3">
              <div className="text-white/80 text-sm">Live insights</div>
              <div className="flex-1 grid grid-cols-3 gap-2">
                {[...Array(9)].map((_,i) => (
                  <div key={i} className="rounded-lg bg-white/10 border border-white/10" />
                ))}
              </div>
              <div className="text-white/60 text-xs">Abstract dashboard illustration</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
