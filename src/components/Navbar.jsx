import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, Search, Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { name: 'Home', href: '#home' },
  { name: 'Collection', href: '#collection' },
  { name: 'Features', href: '#features' },
  { name: 'Story', href: '#story' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    setScrolled(window.scrollY > 20)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'glass-nav' : 'glass-nav'
        }`}
        onScroll={handleScroll}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="w-8 h-8 bg-pookie-black rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-sm tracking-tighter">P</span>
            </div>
            <span className="font-display font-bold text-xl text-pookie-text tracking-tight">POOKIE</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button className="p-2 text-pookie-text-muted hover:text-pookie-blue transition-colors">
              <Search size={18} />
            </button>
            <button className="p-2 text-pookie-text-muted hover:text-pookie-blue transition-colors">
              <ShoppingBag size={18} />
            </button>
            <button className="btn-secondary text-xs px-6 py-2.5">
              Shop Now
            </button>
          </div>

          <button
            className="md:hidden p-2 text-pookie-text"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-20 left-0 w-full bg-white border-b border-pookie-border p-6 space-y-3 backdrop-blur-md"
            >
              {links.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ x: 4 }}
                  className="block text-lg text-pookie-text font-medium py-3 border-b border-pookie-border/20 last:border-0"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}