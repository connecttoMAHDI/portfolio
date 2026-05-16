import { useReducedMotion } from 'framer-motion'
import ContactSection from './components/ContactSection.jsx'
import FaqSection from './components/FaqSection.jsx'
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import ProcessSection from './components/ProcessSection.jsx'
import ProofSection from './components/ProofSection.jsx'
import ServicesSection from './components/ServicesSection.jsx'
import SelectedWorkSection from './components/SelectedWorkSection.jsx'
import { createMotionProps } from './homeMotion.js'

function HomePage() {
  const prefersReducedMotion = useReducedMotion() ?? false
  const motionProps = createMotionProps(prefersReducedMotion)

  return (
    <div className="min-h-screen overflow-x-clip bg-[color:var(--bg)] text-[color:var(--fg)]">
      <div className="flex min-h-screen w-full flex-col">
        <Header motionProps={motionProps} />

        <main id="top" className="flex min-h-0 flex-1 flex-col">
          <HeroSection motionProps={motionProps} />
          <SelectedWorkSection motionProps={motionProps} />
          <ServicesSection motionProps={motionProps} />
          <ProcessSection motionProps={motionProps} />
          <ProofSection motionProps={motionProps} />
          <FaqSection motionProps={motionProps} />
          <ContactSection motionProps={motionProps} />
        </main>
      </div>
    </div>
  )
}

export default HomePage
