import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhoFor from './components/WhoFor'
import Services from './components/Services'
import Examples from './components/Examples'
import WhyNova from './components/WhyNova'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-[#0A1220] text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <WhoFor />
        <Services />
        <Examples />
        <WhyNova />
        <FAQ />
        <Contact />
      </main>
    </div>
  )
}

export default App
