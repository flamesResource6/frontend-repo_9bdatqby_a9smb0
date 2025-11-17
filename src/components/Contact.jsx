import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! We will get back to you shortly.')
  }

  return (
    <section id="contact" className="relative bg-[#0B1324] text-white py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_10%_-10%,rgba(34,211,238,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold">Ready to move forward with AI?</h2>
            <p className="text-white/70 mt-3">Two simple options to start your journey.</p>
            <div className="mt-6 flex gap-3">
              <a href="#contact" className="px-4 py-2 rounded-lg bg-[#22D3EE] text-[#0B1324] font-semibold hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] transition-shadow">Send a message</a>
              <a href="#" className="px-4 py-2 rounded-lg bg-[#7C3AED] text-white font-semibold hover:shadow-[0_0_25px_rgba(124,58,237,0.35)] transition-shadow">Book a discovery call</a>
            </div>
            <p className="mt-6 text-sm text-white/60 max-w-md">NOVA – AI that serves your business, not the other way around.</p>
            <div className="mt-3 text-xs text-white/50">© {new Date().getFullYear()} NOVA • <a href="#" className="underline decoration-white/20 hover:text-white/70">Legal notice</a> • <a href="#" className="underline decoration-white/20 hover:text-white/70">Privacy policy</a></div>
          </div>
          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur grid gap-3">
            <div className="grid md:grid-cols-2 gap-3">
              <div className="grid gap-1">
                <label className="text-sm text-white/80">First name</label>
                <input className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-white/40" placeholder="Jane" required />
              </div>
              <div className="grid gap-1">
                <label className="text-sm text-white/80">Last name</label>
                <input className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-white/40" placeholder="Doe" required />
              </div>
            </div>
            <div className="grid gap-1">
              <label className="text-sm text-white/80">Email</label>
              <input type="email" className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-white/40" placeholder="jane@company.com" required />
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="grid gap-1">
                <label className="text-sm text-white/80">Company</label>
                <input className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-white/40" placeholder="Acme" />
              </div>
              <div className="grid gap-1">
                <label className="text-sm text-white/80">Role</label>
                <input className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-white/40" placeholder="Manager" />
              </div>
            </div>
            <div className="grid gap-1">
              <label className="text-sm text-white/80">Message</label>
              <textarea rows="4" className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-white/40" placeholder="Tell us about your goals…" />
            </div>
            <button type="submit" className="mt-2 px-4 py-2 rounded-lg bg-[#22D3EE] text-[#0B1324] font-semibold hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] transition-shadow">Send</button>
            {status && <div className="text-sm text-green-300">{status}</div>}
          </form>
        </div>
      </div>
    </section>
  )
}
