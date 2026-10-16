import { motion } from 'framer-motion'

const products = [
  {
    id: 1,
    name: 'Pookie Pro',
    price: '$180',
    color: 'White / Blue',
    desc: 'Our flagship model with responsive cushioning and premium materials.',
  },
  {
    id: 2,
    name: 'Pookie Lite',
    price: '$140',
    color: 'All White',
    desc: 'Lightweight design for everyday comfort and style.',
  },
  {
    id: 3,
    name: 'Pookie Elite',
    price: '$220',
    color: 'Midnight Blue',
    desc: 'Limited edition with reflective details and exclusive traction.',
  },
]

export default function Showcase() {
  return (
    <section id="collection" className="py-[120px] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-24 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="section-label"
            >
              <span className="label-dot"></span>
              SIGNATURE STYLES
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-display-md font-display font-bold text-pookie-text tracking-tight"
            >
              The Collection
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-body-sm text-pookie-text-muted mt-4 max-w-md"
            >
              Signature styles crafted for the modern mover.
            </motion.p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group relative glass-card cursor-pointer"
            >
              <div className="aspect-[4/5] bg-pookie-gray rounded-2xl overflow-hidden relative mb-10 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                <img
                  src="/assets/shoe.jpg"
                  alt={product.name}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-white backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-bold tracking-tighter text-pookie-blue border border-white/50 shadow-sm">
                  {product.color}
                </div>
              </div>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg font-bold mb-3 text-pookie-text tracking-tight"
              >
                {product.name}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-pookie-text-muted text-sm leading-relaxed font-light mb-8"
              >
                {product.desc}
              </motion.p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-pookie-blue">{product.price}</span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="p-3 bg-pookie-black text-white rounded-xl hover:bg-pookie-blue transition-colors shadow-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}