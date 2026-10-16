import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t border-pookie-border bg-white py-[80px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-20 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-10">
              <div className="w-8 h-8 bg-pookie-black rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm tracking-tighter">P</span>
              </div>
              <span className="font-display font-bold text-xl text-pookie-text tracking-tight">POOKIE</span>
            </div>
            <p className="text-pookie-text-muted text-sm leading-relaxed max-w-xs font-light">
              Step into the future. Premium sneakers crafted for the modern mover.
            </p>
          </div>

          <div>
            <h4 className="text-pookie-text font-semibold mb-10 text-xs tracking-widest uppercase">Shop</h4>
            <ul className="space-y-5 text-pookie-text-muted text-sm font-light">
              <li><a href="#" className="hover:text-pookie-blue transition-colors duration-300">New Arrivals</a></li>
              <li><a href="#" className="hover:text-pookie-blue transition-colors duration-300">Best Sellers</a></li>
              <li><a href="#" className="hover:text-pookie-blue transition-colors duration-300">Limited Editions</a></li>
              <li><a href="#" className="hover:text-pookie-blue transition-colors duration-300">Sale</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-pookie-text font-semibold mb-10 text-xs tracking-widest uppercase">Support</h4>
            <ul className="space-y-5 text-pookie-text-muted text-sm font-light">
              <li><a href="#" className="hover:text-pookie-blue transition-colors duration-300">Contact Us</a></li>
              <li><a href="#" className="hover:text-pookie-blue transition-colors duration-300">Shipping</a></li>
              <li><a href="#" className="hover:text-pookie-blue transition-colors duration-300">Returns</a></li>
              <li><a href="#" className="hover:text-pookie-blue transition-colors duration-300">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-pookie-text font-semibold mb-10 text-xs tracking-widest uppercase">Newsletter</h4>
            <p className="text-pookie-text-muted text-sm mb-8 font-light">Subscribe for updates and early access.</p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 rounded-xl bg-white border border-pookie-border text-pookie-text focus:outline-none focus:border-pookie-blue transition-colors duration-300"
              />
              <button className="btn-primary text-xs px-8">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-pookie-border pt-20 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-pookie-text-muted text-[10px] font-medium tracking-widest uppercase">
            © 2026 Pookie. All rights reserved.
          </p>
          <div className="flex gap-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="text-pookie-text-muted hover:text-pookie-blue transition-colors duration-300"
            >
              Instagram
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="text-pookie-text-muted hover:text-pookie-blue transition-colors duration-300"
            >
              Twitter
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="text-pookie-text-muted hover:text-pookie-blue transition-colors duration-300"
            >
              Facebook
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="text-pookie-text-muted hover:text-pookie-blue transition-colors duration-300"
            >
              Email
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}