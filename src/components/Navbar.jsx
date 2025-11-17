import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'How it works', href: '#how' },
  { label: 'Services', href: '#services' },
  { label: 'Who is it for?', href: '#who' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

function Logo() {
  return (
    <a href="#top" className="group inline-flex items-center gap-2">
      <div className="relative inline-flex">
        <span className="text-[22px] md:text-2xl font-extrabold tracking-[0.2em] text-white/90 group-hover:text-white transition-colors">N<span className="relative inline-block align-baseline">
          O
          <span aria-hidden className="absolute -right-[0.55em] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FFD873] shadow-[0_0_12px_2px_rgba(255,216,115,0.8)] animate-pulse" />
        </span>VA</span>
      </div>
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const Item = ({ item }) => (
    <a
      href={item.href}
      onClick={() => setOpen(false)}
      className="text-sm md:text-[15px] text-white/80 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/5"
    >
      {item.label}
    </a>
  )

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all ${solid ? 'backdrop-blur-md bg-[#0A1220]/70' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="h-16 md:h-18 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((n) => (
              <Item key={n.href} item={n} />
            ))}
          </nav>
          <button aria-label="Open menu" onClick={() => setOpen(v => !v)} className="md:hidden p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0A1220]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0A1220]/70">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col">
            {navItems.map((n) => (
              <Item key={n.href} item={n} />
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
