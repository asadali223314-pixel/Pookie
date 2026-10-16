import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Play } from 'lucide-react'

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const shoeScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.7])
  const shoeOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const shoeY = useTransform(scrollYProgress, [0, 0.4], [0, 150])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background - clean white */}
      <div className="absolute inset-0 bg-white"></div>
      
      {/* Subtle decorative gradient */}
      <div className="absolute top-[-20%] left-[-20%] w-[40%] h-[40%] bg-blue-50/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-20%] w-[40%] h-[40%] bg-blue-50/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Content - Left Side */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 lg:px-0 lg:text-left lg:items-start w-full max-w-7xl mx-auto lg:pl-24">
        
        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
          className="section-label"
        >
          <span className="label-dot"></span>
          NEW COLLECTION 2026
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          className="font-display text-display-xl md:text-display-lg lg:text-display-xl mb-8 text-center lg:text-left leading-none"
        >
          Step Into<span className="text-pookie-blue"> the Future</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          className="section-subtitle"
        >
          Crafted for those who move differently. Experience weightless comfort with every step.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center justify-center lg:justify-start gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary"
            onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Play size={18} className="mr-2" />
            Shop Collection
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="btn-secondary"
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Details <ArrowDown size={18} className="ml-2" />
          </motion.button>
        </motion.div>
      </div>

      {/* Shoe Image - Right Side */}
      <motion.div
        className="relative z-10 w-[400px] h-[500px] flex items-center justify-center md:w-[500px] md:h-[600px] lg:w-[600px] lg:h-[700px] hidden lg:block mt-12 lg:mt-0"
        style={{ scale: shoeScale, opacity: shoeOpacity, transform: `translateY(${shoeY}px)` }}
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Shoe glow effect */}
        <div className="absolute inset-0 bg-blue-100/40 rounded-full blur-[100px] pointer-events-none"></div>
        
        {/* Shoe image */}
        <img
          src="/assets/shoe.jpg"
          alt="Pookie signature sneaker"
          className="relative z-10 w-full h-full object-contain drop-shadow-[0_50px_100px_rgba(0,0,0,0.08)] transition-transform duration-1000"
          loading="lazy"
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-pookie-text-muted hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <ArrowDown size={20} className="opacity-40" />
          <span className="text-[10px] text-pookie-text font-medium tracking-widest uppercase opacity-50">Scroll</span>
        </motion.div>
      </motion.div>

      {/* Mobile shoe - smaller version */}
      <motion.div
        className="relative z-10 w-[280px] h-[350px] flex items-center justify-center mt-16 lg:hidden"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="absolute inset-0 bg-blue-100/40 rounded-full blur-[60px] pointer-events-none"></div>
        <img
          src="/assets/shoe.jpg"
          alt="Pookie signature sneaker"
          className="relative z-10 w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.08)]"
          loading="lazy"
        />
      </motion.div>
    </section>
  )
}