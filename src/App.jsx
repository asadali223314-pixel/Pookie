import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Story from './components/Story'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen selection:bg-pookie-blue selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Story />
      </main>
      
      <Footer />
    </div>
  )
}

export default App