import { motion } from 'framer-motion'
import SectionContainer from './SectionContainer.jsx'
import SectionHeader from './SectionHeader.jsx'
import { processIntro, processSteps } from '../homeData.js'
import { containerVariants, itemVariants } from '../homeMotion.js'

function ProcessSection({ motionProps }) {
  return (
    <motion.section
      id="process"
      aria-labelledby="process-title"
      className="w-full scroll-mt-28 bg-[color:var(--section-wash)] py-14 sm:scroll-mt-32 sm:py-16 md:py-20 lg:py-[120px]"
      {...motionProps}
      variants={containerVariants}
    >
      <SectionContainer>
        <div className="space-y-10 lg:space-y-12">
          <SectionHeader
            titleId="process-title"
            eyebrow={processIntro.eyebrow}
            title={processIntro.title}
            highlight={processIntro.highlight}
            description={processIntro.description}
            titleClassName="mt-5 max-w-[12ch] text-balance text-[clamp(2.25rem,4vw,4.3rem)] leading-[0.94] sm:max-w-[13ch] lg:max-w-[16.25ch]"
            descriptionClassName="max-w-[33ch] text-[0.95rem] leading-[1.65] sm:text-[1rem]"
          />

          <motion.div className="flex items-center" variants={itemVariants}>
            <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full bg-[color:var(--fg)]" />
            <span aria-hidden="true" className="ml-4 h-px flex-1 bg-[color:var(--muted-strong)]/34 lg:ml-5" />
            <svg
              aria-hidden="true"
              viewBox="0 0 14 10"
              className="-ml-px h-4 w-5 shrink-0 overflow-visible text-[color:var(--muted-strong)]"
            >
              <path
                d="M1.25 1.85 12.5 5 1.25 8.15"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </motion.div>

          <motion.div
            className="grid gap-0 lg:grid-cols-4"
            variants={containerVariants}
          >
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.number}
                index={index}
                step={step}
              />
            ))}
          </motion.div>

          <motion.div className="border-t border-[color:var(--line)] pt-6 lg:pt-7" variants={itemVariants}>
            <p className="text-center font-brand-serif text-[clamp(1.3rem,1.95vw,2rem)] italic leading-[1.25] tracking-[-0.045em] text-[color:var(--muted-strong)]">
              <span>{processIntro.footer} </span>
              <span className="inline-block bg-[color:var(--highlight)] px-1.5">
                {processIntro.footerHighlight}
              </span>
            </p>
          </motion.div>
        </div>
      </SectionContainer>
    </motion.section>
  )
}

function ProcessStep({ index, step }) {
  return (
    <motion.article
      className={`grid gap-8 py-8 lg:min-h-[26rem] lg:py-0 ${index > 0 ? 'border-t border-[color:var(--line)] lg:border-t-0 lg:border-l' : ''
        } ${index === 0 ? 'lg:pr-12' : 'lg:px-12'} ${index === processSteps.length - 1 ? 'lg:pr-0' : ''}`}
      variants={itemVariants}
    >
      <div className="flex items-start justify-between gap-5">
        <p className="text-[2.8rem] font-light leading-none tracking-[-0.06em] text-[color:var(--muted)] [font-variant-numeric:tabular-nums]">
          {step.number}
        </p>

        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--highlight)] text-[color:var(--muted-strong)]">
          <ProcessGlyph icon={step.icon} />
        </div>
      </div>

      <div className="space-y-5">
        <h3 className="font-brand-serif text-[clamp(2rem,2.5vw,2.95rem)] font-light leading-[0.95] tracking-[-0.075em] text-[color:var(--fg)]">
          {step.title}
        </h3>

        <p className="max-w-[24ch] text-[0.95rem] leading-[1.65] text-[color:var(--muted-strong)]">
          {step.description}
        </p>
      </div>

      <div className="mt-auto space-y-5 border-t border-[color:var(--line)] pt-5">
        <p className="text-[0.68rem] font-medium uppercase tracking-[0.3em] text-[color:var(--muted)]">
          Deliverables
        </p>

        <ul className="space-y-1">
          {step.deliverables.map((deliverable) => (
            <li key={deliverable} className="flex items-center gap-3 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[color:var(--muted-strong)]">
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[color:var(--muted)]/80" />
              <span>{deliverable}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}

function ProcessGlyph({ icon }) {
  if (icon === 'compass') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <circle cx="12" cy="12" r="7.25" stroke="currentColor" strokeWidth="1.35" />
        <path d="m10.2 13.8 1.72-4.68 4.68-1.72-1.72 4.68-4.68 1.72Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.35" />
        <circle cx="12" cy="12" r="0.82" fill="currentColor" />
      </svg>
    )
  }

  if (icon === 'pen') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path
          d="m14.6 4.9 4.5 4.5-7.35 7.35-5.4 1.65L8 13l6.6-8.1Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.35"
        />
        <path d="m12.95 6.55 4.5 4.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.35" />
        <path d="M9.9 19.2h7.7" stroke="currentColor" strokeLinecap="round" strokeWidth="1.35" />
      </svg>
    )
  }

  if (icon === 'rocket') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path
          d="M13.6 4.75c2.48.58 4.46 2.56 5.04 5.04l-5.34 5.34-4.98-4.98 5.28-5.4Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.35"
        />
        <path d="m8.32 10.15-3.02 1.1 2.48 2.48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35" />
        <path d="m13.3 15.13 2.48 2.48 1.1-3.02" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35" />
        <path d="m8.15 15.86-2.3 2.3" stroke="currentColor" strokeLinecap="round" strokeWidth="1.35" />
        <circle cx="14.6" cy="8.84" r="1.15" fill="currentColor" />
      </svg>
    )
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path d="M8 7.8 3.8 12 8 16.2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35" />
      <path d="M16 7.8 20.2 12 16 16.2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35" />
      <path d="m13.6 4.9-3.2 14.2" stroke="currentColor" strokeLinecap="round" strokeWidth="1.35" />
    </svg>
  )
}

export default ProcessSection
