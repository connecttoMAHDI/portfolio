import { motion } from 'framer-motion'
import SectionContainer from './SectionContainer.jsx'
import SectionHeader from './SectionHeader.jsx'
import { featuredTestimonial, proofIntro, proofSignals } from '../homeData.js'
import { containerVariants, itemVariants } from '../homeMotion.js'

function ProofSection({ motionProps }) {
  return (
    <motion.section
      id="proof"
      aria-labelledby="proof-title"
      className="w-full scroll-mt-28 py-14 sm:scroll-mt-32 sm:py-16 md:py-20 lg:py-[120px]"
      {...motionProps}
      variants={containerVariants}
    >
      <SectionContainer maxWidth="1512px">
        <div className="space-y-10 lg:space-y-12">
          <SectionHeader
            titleId="proof-title"
            eyebrow={proofIntro.eyebrow}
            title={proofIntro.title}
            description={proofIntro.description}
            titleClassName="mt-6 max-w-[10.25ch] text-[clamp(3rem,5.2vw,5.35rem)] leading-[0.91] sm:max-w-[11ch]"
            descriptionClassName="max-w-[32ch] text-[1rem] leading-[1.65] sm:text-[1.12rem]"
          />

          <motion.div
            className="grid gap-12 lg:grid-cols-[minmax(0,38rem)_minmax(0,1fr)] lg:items-end lg:gap-14 xl:grid-cols-[minmax(0,40rem)_minmax(0,1fr)] xl:gap-20"
            variants={containerVariants}
          >
            <TestimonialCard />

            <motion.div
              className="w-full self-stretch lg:self-end lg:pb-0"
              variants={containerVariants}
            >
              <div className="grid border-y border-[color:var(--line)] sm:grid-cols-2 lg:ml-auto lg:max-w-[38.75rem] lg:border-y-0 xl:max-w-[41.25rem]">
                {proofSignals.map((signal, index) => (
                  <ProofSignal key={signal.number} index={index} signal={signal} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </SectionContainer>
    </motion.section>
  )
}

function TestimonialCard() {
  return (
    <motion.figure
      className="rounded-[1.45rem] border border-[color:var(--line)] bg-[color:var(--panel)] px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-11"
      variants={itemVariants}
    >
      <div className="flex items-center gap-5">
        <span
          aria-hidden="true"
          className="font-brand-serif text-[4.6rem] font-light leading-none tracking-[-0.08em] text-[color:var(--line)]"
        >
          &ldquo;
        </span>
        <span aria-hidden="true" className="mt-1 h-px flex-1 bg-[color:var(--line)]" />
      </div>

      <blockquote className="mt-5 max-w-[18ch] font-brand-serif text-[clamp(2rem,3.1vw,3rem)] font-light leading-[1.08] tracking-[-0.075em] text-[color:var(--fg)] sm:max-w-[19.5ch]">
        {featuredTestimonial.quote}
      </blockquote>

      <figcaption className="mt-8 border-t border-[color:var(--line)] pt-5">
        <p className="text-[0.92rem] font-semibold tracking-[0.04em] text-[color:var(--fg)]">
          {featuredTestimonial.author}
        </p>
        <p className="mt-1 text-[0.95rem] leading-[1.4] tracking-[0.04em] text-[color:var(--muted-strong)]">
          {featuredTestimonial.role}
        </p>
      </figcaption>
    </motion.figure>
  )
}

function ProofSignal({ index, signal }) {
  return (
    <motion.article
      className={`min-h-[16rem] px-0 py-8 sm:min-h-[17rem] sm:px-9 sm:py-9 lg:min-h-[15.2rem] lg:px-12 lg:py-9 ${
        index % 2 === 1 ? 'sm:border-l sm:border-[color:var(--line)]' : ''
      } ${index > 1 ? 'border-t border-[color:var(--line)]' : index > 0 ? 'border-t border-[color:var(--line)] sm:border-t-0' : ''}`}
      variants={itemVariants}
    >
      <p className="text-[1.1rem] font-semibold leading-none tracking-[-0.035em] text-[color:var(--muted)] [font-variant-numeric:tabular-nums]">
        {signal.number}
      </p>

      <h3 className="mt-7 font-brand-serif text-[clamp(1.65rem,2vw,2.2rem)] font-light leading-[1] tracking-[-0.075em] text-[color:var(--fg)]">
        {signal.title}
      </h3>

      <p className="mt-5 max-w-[25ch] text-[0.95rem] leading-[1.65] text-[color:var(--muted-strong)]">
        {signal.description}
      </p>
    </motion.article>
  )
}

export default ProofSection
