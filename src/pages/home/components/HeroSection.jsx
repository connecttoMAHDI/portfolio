import { motion } from 'framer-motion'
import Button from './Button.jsx'
import SectionContainer from './SectionContainer.jsx'
import { heroCopy } from '../homeData.js'
import { containerVariants, itemVariants } from '../homeMotion.js'
import HeroVisual from './HeroVisual.jsx'
import StatsRow from './StatsRow.jsx'

function HeroSection({ motionProps }) {
  return (
    <section className="w-full">
      <SectionContainer className="pt-6 pb-12 sm:pt-8 sm:pb-16 md:pt-10 md:pb-20 lg:pt-8 lg:pb-[120px]">
        <div className="grid items-start gap-7 md:gap-10 lg:grid-cols-[minmax(0,1.04fr)_minmax(21rem,0.88fr)] lg:items-center lg:gap-14">
          <motion.div id="about" className="max-w-[42rem] scroll-mt-28 sm:scroll-mt-32" {...motionProps} variants={containerVariants}>
            <motion.p
              className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-[color:var(--muted)]"
              variants={itemVariants}
            >
              {heroCopy.eyebrow}
            </motion.p>

            <motion.h1
              className="mt-5 max-w-[22ch] font-brand-serif text-[clamp(2.35rem,4.1vw,4.6rem)] font-thin leading-[1.06] tracking-[-0.075em] text-[color:var(--fg)] sm:text-[clamp(2.45rem,4.1vw,4.6rem)] sm:leading-[0.94]"
              variants={itemVariants}
            >
              <span>
                {heroCopy.headline[0]} {heroCopy.headline[1]}{' '}
              </span>
              <span className="relative inline-block italic text-[color:var(--muted-strong)]">
                <span className="relative z-10">{heroCopy.headline[2]}</span>
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 bottom-[-0.30em] -z-0 h-[1.3em] md:h-[1.2em] bg-[#EEEEE8]"
                />
              </span>
            </motion.h1>

            <motion.p className="mt-6 max-w-[40ch] text-[0.93rem] leading-[1.6] text-[color:var(--muted-strong)] sm:text-[1rem]" variants={itemVariants}>
              {heroCopy.description}
            </motion.p>

            <motion.div className="mt-6 flex flex-col-reverse gap-5 sm:flex-row sm:items-center sm:gap-4" variants={itemVariants}>
              <Button href={heroCopy.primaryCta.href} variant="primary" variants={itemVariants}>
                {heroCopy.primaryCta.label}
              </Button>

              <Button href={heroCopy.secondaryCta.href} icon="→" variant="underline" variants={itemVariants}>
                {heroCopy.secondaryCta.label}
              </Button>
            </motion.div>
          </motion.div>

          <HeroVisual motionProps={motionProps} />
        </div>

        <StatsRow motionProps={motionProps} />
      </SectionContainer>
    </section>
  )
}

export default HeroSection
