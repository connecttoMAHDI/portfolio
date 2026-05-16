import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import SectionContainer from './SectionContainer.jsx'
import { faqIntro, faqItems } from '../homeData.js'
import { containerVariants, easing, itemVariants } from '../homeMotion.js'

function FaqSection({ motionProps }) {
  const [openItemId, setOpenItemId] = useState(faqItems[0]?.id)
  const prefersReducedMotion = useReducedMotion() ?? false

  return (
    <motion.section
      id="faq"
      aria-labelledby="faq-title"
      className="w-full scroll-mt-28 bg-[color:var(--section-wash)] py-14 sm:scroll-mt-32 sm:py-16 md:py-20 lg:py-[120px]"
      {...motionProps}
      variants={containerVariants}
    >
      <SectionContainer maxWidth="1512px">
        <div className="grid gap-10 lg:grid-cols-[minmax(16rem,0.55fr)_minmax(0,1.45fr)] lg:gap-16 xl:gap-24">
          <motion.div className="lg:sticky lg:top-28 lg:self-start" variants={containerVariants}>
            <motion.p
              className="text-[0.7rem] font-medium uppercase tracking-[0.34em] text-[color:var(--muted)]"
              variants={itemVariants}
            >
              {faqIntro.eyebrow}
            </motion.p>

            <motion.h2
              id="faq-title"
              className="mt-6 max-w-[10ch] font-brand-serif text-[clamp(3rem,5.2vw,5.35rem)] font-light leading-[0.91] tracking-[-0.075em] text-[color:var(--fg)] sm:max-w-[11ch]"
              variants={itemVariants}
            >
              <span className="block">{faqIntro.title[0]}</span>
              <span className="block">{faqIntro.title[1]}</span>
            </motion.h2>

            <motion.p
              className="mt-8 max-w-[30ch] text-[1rem] leading-[1.65] text-[color:var(--muted-strong)] sm:text-[1.1rem]"
              variants={itemVariants}
            >
              {faqIntro.description}
            </motion.p>

            <motion.a
              href={faqIntro.cta.href}
              className="mt-9 inline-flex min-h-14 items-center justify-center gap-7 rounded-full border border-[color:var(--muted-strong)] px-8 text-[1rem] font-medium text-[color:var(--fg)] transition-colors duration-300 ease-out hover:border-[color:var(--fg)] hover:bg-[color:var(--highlight)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--fg)] sm:mt-10 sm:min-h-16 sm:px-9 sm:text-[1.08rem]"
              variants={itemVariants}
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
            >
              <span>{faqIntro.cta.label}</span>
              <span aria-hidden="true" className="text-[0.98em]">
                &rarr;
              </span>
            </motion.a>
          </motion.div>

          <motion.div className="border-y border-[color:var(--line)]" variants={containerVariants}>
            {faqItems.map((item) => {
              const isOpen = item.id === openItemId

              return (
                <FaqItem
                  key={item.id}
                  isOpen={isOpen}
                  item={item}
                  onToggle={() => setOpenItemId(isOpen ? null : item.id)}
                  prefersReducedMotion={prefersReducedMotion}
                />
              )
            })}
          </motion.div>
        </div>
      </SectionContainer>
    </motion.section>
  )
}

function FaqItem({ isOpen, item, onToggle, prefersReducedMotion }) {
  const answerId = `faq-answer-${item.id}`
  const buttonId = `faq-button-${item.id}`

  return (
    <motion.article className="border-b border-[color:var(--line)] last:border-b-0" variants={itemVariants}>
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={answerId}
          className="group flex w-full items-start justify-between gap-6 py-7 text-left text-[color:var(--fg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[color:var(--fg)] sm:gap-10 sm:py-8 lg:py-9"
          onClick={onToggle}
        >
          <span className="max-w-[25ch] font-brand-serif text-[clamp(1.8rem,2.3vw,2.55rem)] font-light leading-[1.03] tracking-[-0.075em]">
            {item.question}
          </span>
          <motion.span
            aria-hidden="true"
            className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center text-[1.8rem] font-light leading-none text-[color:var(--muted-strong)]"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.36, ease: easing }}
          >
            {isOpen ? '\u2212' : '+'}
          </motion.span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={answerId}
            role="region"
            aria-labelledby={buttonId}
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: easing }}
          >
            <div className="max-w-[51rem] pb-8 text-[1.04rem] leading-[1.75] text-[color:var(--muted-strong)] sm:text-[1.15rem] lg:pb-10">
              {item.answer.map((paragraph) => (
                <p key={paragraph} className="mb-6 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.article>
  )
}

export default FaqSection
