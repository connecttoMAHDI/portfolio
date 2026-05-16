import { useReducedMotion } from 'framer-motion'
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import StatsRow from './components/StatsRow.jsx'
import TrustRow from './components/TrustRow.jsx'
import { createMotionProps } from './homeMotion.js'

function HomePage() {
  const prefersReducedMotion = useReducedMotion() ?? false
  const motionProps = createMotionProps(prefersReducedMotion)

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--fg)]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-5 py-4 sm:px-8 lg:px-12 lg:py-4 xl:px-16">
        <Header motionProps={motionProps} />

        <main id="top" className="flex min-h-0 flex-1 flex-col">
          <section className="flex min-h-0 flex-1 flex-col justify-between pt-8 pb-6 lg:pt-6 lg:pb-5">
            <HeroSection motionProps={motionProps} prefersReducedMotion={prefersReducedMotion} />
            <TrustRow motionProps={motionProps} />
            <StatsRow motionProps={motionProps} />
          </section>
        </main>
      </div>
    </div>
  )
}

export default HomePage
