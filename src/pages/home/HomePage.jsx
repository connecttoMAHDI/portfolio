import { useReducedMotion } from 'framer-motion'
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import SelectedWorkSection from './components/SelectedWorkSection.jsx'
import { createMotionProps } from './homeMotion.js'

function HomePage() {
  const prefersReducedMotion = useReducedMotion() ?? false
  const motionProps = createMotionProps(prefersReducedMotion)

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--fg)]">
      <div className="flex min-h-screen w-full flex-col">
        <Header motionProps={motionProps} />

        <main id="top" className="flex min-h-0 flex-1 flex-col">
          <HeroSection motionProps={motionProps} />

          <SelectedWorkSection motionProps={motionProps} />
        </main>
      </div>
    </div>
  )
}

export default HomePage
