import { motion } from 'framer-motion'
import Button from './Button.jsx'
import SectionContainer from './SectionContainer.jsx'
import { services, servicesIntro } from '../homeData.js'
import { containerVariants, itemVariants } from '../homeMotion.js'

function ServicesSection({ motionProps }) {
  return (
    <motion.section
      id="process"
      aria-labelledby="services-title"
      className="w-full scroll-mt-28 py-14 sm:scroll-mt-32 sm:py-16 md:py-20 lg:py-[120px]"
      {...motionProps}
      variants={containerVariants}
    >
      <SectionContainer>
        <div className="space-y-6 lg:space-y-10">
          <motion.div
            className="grid gap-5 border-b border-[color:var(--line)] pb-6 sm:gap-6 sm:pb-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(19rem,0.82fr)] lg:items-start lg:gap-12 lg:pb-10"
            variants={containerVariants}
          >
            <div className="max-w-[45rem]">
              <motion.p
                className="text-[0.7rem] font-medium uppercase tracking-[0.34em] text-[color:var(--muted)]"
                variants={itemVariants}
              >
                {servicesIntro.eyebrow}
              </motion.p>

              <motion.h2
                id="services-title"
                className="mt-4 max-w-[11.7ch] font-brand-serif text-[clamp(2.25rem,4vw,4.3rem)] font-light leading-[0.94] tracking-[-0.075em] text-[color:var(--fg)]"
                variants={itemVariants}
              >
                <span className="block">{servicesIntro.title[0]}</span>
                <span className="block">{servicesIntro.title[1]}</span>
              </motion.h2>
            </div>

            <motion.p
              className="max-w-[36ch] text-[0.95rem] leading-[1.62] text-[color:var(--muted-strong)] sm:text-[1rem] lg:justify-self-end"
              variants={itemVariants}
            >
              {servicesIntro.description}
            </motion.p>
          </motion.div>

          <motion.div
            className="grid gap-6 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)_minmax(0,1.08fr)]"
            variants={containerVariants}
          >
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </motion.div>
        </div>
      </SectionContainer>
    </motion.section>
  )
}

function ServiceCard({ service }) {
  return (
    <motion.article
      className="h-full rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--panel)]"
      variants={itemVariants}
    >
      <div className="flex h-full flex-col gap-8 p-5 sm:p-6 lg:p-8">
        <div className="flex items-start justify-between gap-4">
          <p className="text-[1.95rem] font-light leading-none tracking-[-0.05em] text-[color:var(--fg)]">
            {service.number}
          </p>

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--highlight)] text-[color:var(--muted-strong)]">
            <ServiceGlyph icon={service.icon} />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="max-w-[12ch] font-brand-serif text-[clamp(2rem,2.5vw,3rem)] font-light leading-[0.95] tracking-[-0.075em] text-[color:var(--fg)]">
            {service.title}
          </h3>

          <p className="max-w-[31ch] text-[0.95rem] leading-[1.62] text-[color:var(--muted-strong)]">
            {service.description}
          </p>
        </div>

        <div className="mt-auto space-y-5 border-t border-[color:var(--line)] pt-5">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.32em] text-[color:var(--muted)]">
            What we deliver
          </p>

          <ul className="space-y-3">
            {service.deliverables.map((deliverable) => (
              <li key={deliverable} className="flex gap-3 text-[0.95rem] leading-[1.52] text-[color:var(--muted-strong)]">
                <span aria-hidden="true" className="mt-[0.62rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--muted)]/70" />
                <span>{deliverable}</span>
              </li>
            ))}
          </ul>

          <Button href={service.cta.href} icon="→" variant="link">
            {service.cta.label}
          </Button>
        </div>
      </div>
    </motion.article>
  )
}

function ServiceGlyph({ icon }) {
  if (icon === 'compass') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <circle cx="12" cy="12" r="7.25" stroke="currentColor" strokeWidth="1.4" />
        <path d="m10.15 13.85 1.7-4.7 4.7-1.7-1.7 4.7-4.7 1.7Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.4" />
        <circle cx="12" cy="12" r="0.85" fill="currentColor" />
      </svg>
    )
  }

  if (icon === 'pen') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path
          d="m14.5 4.9 4.6 4.6-7.55 7.55L6 18.7l1.65-5.55L14.5 4.9Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.4"
        />
        <path d="m13 6.4 4.6 4.6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
        <path d="m10.55 13.45 2 2" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
      </svg>
    )
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path d="M8 7.8 3.8 12 8 16.2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
      <path d="M16 7.8 20.2 12 16 16.2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
      <path d="m13.6 4.9-3.2 14.2" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
    </svg>
  )
}

export default ServicesSection
