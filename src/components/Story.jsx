import { motion } from 'framer-motion'

export default function Story() {
  return (
    <section id="story" className="py-[120px] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-50/20 rounded-3xl blur-[100px] pointer-events-none"></div>
            <img
              src="/assets/shoe.jpg"
              alt="Brand story"
              className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-[0_40px_80px_-10px_rgba(0,0,0,0.1)] border border-white/50"
              loading="lazy"
            />
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="section-label"
            >
              <span className="label-dot"></span>
              OUR STORY
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-display-lg font-display font-bold mb-10 text-pookie-text tracking-tight leading-none"
            >
              Our Story
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-body-md text-pookie-text-muted mb-10 leading-relaxed font-light"
            >
              Pookie was born from a simple idea: shoes should move with you, not against you. We started in a small studio with a needle, thread, and a dream to build the most comfortable sneaker on the planet.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-body-md text-pookie-text-muted mb-12 leading-relaxed font-light"
            >
              Every pair is hand-inspected, rigorously tested, and designed to last. Because when you love what you wear, you move differently.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-6"
            >
              <div className="w-10 h-10 rounded-full bg-pookie-black flex items-center justify-center text-white font-bold text-sm">
                P
              </div>
              <div>
                <div className="font-bold text-pookie-text text-sm">Pookie Team</div>
                <div className="text-[10px] text-pookie-text-muted font-medium tracking-widest uppercase">Founded in 2026</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}