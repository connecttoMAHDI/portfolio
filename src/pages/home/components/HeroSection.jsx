import { motion } from 'framer-motion'
import { heroCopy } from '../homeData.js'
import { containerVariants, itemVariants } from '../homeMotion.js'
import HeroVisual from './HeroVisual.jsx'

function HeroSection({ motionProps, prefersReducedMotion }) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.04fr)_minmax(23rem,0.88fr)] lg:gap-14">
      <motion.div id="about" className="max-w-[42rem]" {...motionProps} variants={containerVariants}>
        <motion.p
          className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-[color:var(--muted)]"
          variants={itemVariants}
        >
          {heroCopy.eyebrow}
        </motion.p>

        <motion.h1
          className="mt-5 max-w-[12ch] font-brand-serif text-[clamp(2.45rem,4.1vw,4.6rem)] font-thin leading-[0.94] tracking-[-0.075em] text-[color:var(--fg)]"
          variants={itemVariants}
        >
          <span className="block">{heroCopy.headline[0]}</span>
          <span className="block">{heroCopy.headline[1]}</span>
          <span className="relative inline-block italic text-[color:var(--muted-strong)]">
            <span className="relative z-10">{heroCopy.headline[2]}</span>
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 bottom-[-0.30em] -z-0 h-[1.2em] bg-[#EEEEE8]"
            />
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-[34ch] text-[0.95rem] leading-[1.6] text-[color:var(--muted-strong)] sm:text-[1rem]"
          variants={itemVariants}
        >
          {heroCopy.description}
        </motion.p>

        <motion.div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center" variants={itemVariants}>
          <motion.a
            href={heroCopy.primaryCta.href}
            className="inline-flex items-center justify-center rounded-full bg-[oklch(15%_0.014_74)] px-5 py-2.5 text-sm font-medium text-[color:var(--bg)] transition-transform duration-300 ease-out hover:-translate-y-0.5"
            whileHover={prefersReducedMotion ? undefined : { y: -2 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
          >
            {heroCopy.primaryCta.label}
          </motion.a>

          <motion.a
            href={heroCopy.secondaryCta.href}
            className="inline-flex items-center justify-start border-b border-[color:var(--line)] pb-1 text-sm font-medium text-[color:var(--muted-strong)] transition-colors duration-300 ease-out hover:text-[color:var(--fg)]"
            whileHover={prefersReducedMotion ? undefined : { x: 2 }}
          >
            {heroCopy.secondaryCta.label}
          </motion.a>
        </motion.div>
      </motion.div>

      <HeroVisual motionProps={motionProps} />
    </div>
  )
}

export default HeroSection
