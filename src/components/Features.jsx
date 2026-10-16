import { motion } from 'framer-motion'
import { Zap, Shield, Flame, Rocket } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Responsive cushioning engineered to adapt to every stride.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Premium materials with reinforced construction for durability.',
  },
  {
    icon: Flame,
    title: 'Street Ready',
    description: 'Urban design meets performance. Turn heads everywhere.',
  },
  {
    icon: Rocket,
    title: 'Zero Gravity',
    description: 'Weightless feel that makes every step feel like floating.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-[120px] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="section-label"
          >
            <span className="label-dot"></span>
            CRAFTED DETAILS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-title"
          >
            Built Different
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="section-subtitle"
          >
            Every detail is engineered for performance. From the sole to the laces, we don't cut corners.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
                ease: 'easeOut',
              }}
              whileHover={{ y: -6 }}
              className="glass-card group cursor-default"
            >
              <div className="w-16 h-16 bg-pookie-blue-light rounded-2xl flex items-center justify-center mb-10 group-hover:bg-pookie-blue transition-colors duration-300">
                <feature.icon size={26} className="text-pookie-blue group-hover:text-white transition-colors duration-300" />
              </div>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-bold mb-4 text-pookie-text tracking-tight"
              >
                {feature.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-pookie-text-muted text-sm leading-relaxed font-light"
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}