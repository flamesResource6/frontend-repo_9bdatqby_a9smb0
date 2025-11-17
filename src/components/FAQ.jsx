import { useState } from 'react'

const faqs = [
  {
    q: 'I know nothing about AI. Is that a problem?',
    a: 'Not at all. We designed NOVA for non-experts. We explain clearly, avoid jargon and guide you step by step.'
  },
  {
    q: 'How long does a typical project last?',
    a: 'A diagnostic sprint takes 2–3 weeks. Implementation and training vary from 1 to 3 months depending on scope.'
  },
  {
    q: 'Do you work with small and medium-sized businesses?',
    a: 'Yes. NOVA is built for SMEs and mid-size organizations across Belgium and Europe.'
  },
  {
    q: 'Is AI compliant with GDPR and data privacy regulations?',
    a: 'We select tools with strong privacy controls and configure them to comply with GDPR. We also help set up governance and policies.'
  },
  {
    q: 'Can you work remotely and on-site?',
    a: 'Both. We mix remote workshops and on-site sessions as needed.'
  },
  {
    q: 'Do you take commissions from vendors?',
    a: 'No. We are tool-agnostic. Our only incentive is your ROI.'
  }
]

function Item({ q, a, i }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-white/10 bg-white/5">
      <button onClick={() => setOpen(v => !v)} className="w-full text-left px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <span className="font-medium text-white/90">{q}</span>
          <span className="text-white/60">{open ? '−' : '+'}</span>
        </div>
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-white/75">{a}</div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-[#0A1220] text-white py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_100%_120%,rgba(124,58,237,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-4xl font-bold">Frequently asked questions</h2>
        <div className="mt-8 grid gap-3">
          {faqs.map((f, i) => (
            <Item key={f.q} {...f} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
