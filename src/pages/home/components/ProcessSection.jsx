import { motion } from 'framer-motion'
import SectionContainer from './SectionContainer.jsx'
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
          <motion.div
            className="grid gap-8 lg:grid-cols-[minmax(0,1.06fr)_minmax(18rem,0.8fr)] lg:items-end lg:gap-12"
            variants={containerVariants}
          >
            <div className="max-w-[45rem]">
              <motion.p
                className="text-[0.7rem] font-medium uppercase tracking-[0.34em] text-[color:var(--muted)]"
                variants={itemVariants}
              >
                {processIntro.eyebrow}
              </motion.p>

              <motion.h2
                id="process-title"
                className="mt-5 max-w-[12ch] text-balance font-brand-serif text-[clamp(2.25rem,4vw,4.3rem)] font-light leading-[0.94] tracking-[-0.075em] text-[color:var(--fg)] sm:max-w-[13ch] lg:max-w-[16.25ch]"
                variants={itemVariants}
              >
                <span className="block">{processIntro.title[0]}</span>
                <span className="block">{processIntro.title[1]}</span>
                <span className="relative mt-2 block w-fit italic text-[color:var(--muted-strong)]">
                  <span className="relative z-10">{processIntro.highlight}</span>
                  <span
                    aria-hidden="true"
                    className="absolute left-0 right-0 bottom-[-0.30em] -z-0 h-[1.3em] md:h-[1.2em] bg-[color:var(--highlight)]"
                  />
                </span>
              </motion.h2>
            </div>

            <motion.p
              className="max-w-[33ch] text-[0.95rem] leading-[1.65] text-[color:var(--muted-strong)] sm:text-[1rem] lg:justify-self-end"
              variants={itemVariants}
            >
              {processIntro.description}
            </motion.p>
          </motion.div>

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
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.001 512.001" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M334.918,177.084c-19.545-19.544-51.177-19.545-70.721-0.001c-19.544,19.542-19.547,51.177,0,70.722 c19.543,19.544,51.175,19.546,70.721,0C354.461,228.263,354.465,196.628,334.918,177.084z M311.343,224.231 c-6.515,6.515-17.058,6.515-23.574,0c-6.513-6.514-6.516-17.058,0-23.574c6.515-6.514,17.057-6.517,23.575,0.001 C317.858,207.172,317.858,217.717,311.343,224.231z"></path> </g> </g> <g> <g> <path d="M507.119,4.881c-6.511-6.508-17.066-6.508-23.575,0.001l-31.512,31.512c-76.44-12.355-153.982,12.54-209.016,67.573 l-62.515,62.515c-32.344-21.392-76.435-17.859-104.896,10.601L4.883,247.806c-6.504,6.504-6.51,17.064,0,23.574 c16.249,16.248,37.591,24.373,58.935,24.373c9.085,0,18.166-1.487,26.859-4.431l-7.311,21.935 c-1.996,5.99-0.438,12.593,4.027,17.058l1.956,1.956c-29.645,6.135-53.561,29.614-61.388,58.312L0.588,490.945 c-1.574,5.771,0.066,11.944,4.295,16.174c4.243,4.243,10.422,5.863,16.173,4.295l100.363-27.372 c28.713-7.831,52.18-31.758,58.313-61.388l1.956,1.956c4.47,4.471,11.075,6.02,17.058,4.027l21.935-7.312 c-9.86,29.112-3.223,62.629,19.942,85.793c6.504,6.505,17.065,6.51,23.574,0l70.722-70.722 c28.792-28.792,31.872-72.886,10.611-104.906l62.505-62.505c55.034-55.033,79.929-132.576,67.573-209.016l31.513-31.513 C513.629,21.946,513.629,11.391,507.119,4.881z M42.263,257.572l56.916-56.916c15.368-15.367,38.329-18.621,56.914-9.766 c-12.66,12.66-44.41,44.41-56.914,56.916C83.812,263.172,60.85,266.431,42.263,257.572z M112.646,451.878l-72.219,19.696 l19.696-72.22c8.262-30.293,46.621-49.67,74.409-21.899l0.013,0.013C162.304,405.243,142.955,443.611,112.646,451.878z M197.976,393.751l-79.727-79.727l11.787-35.36l103.301,103.301L197.976,393.751z M311.344,412.823l-56.914,56.914 c-8.856-18.586-5.601-41.548,9.767-56.916c12.575-12.576,44.547-44.548,56.931-56.931 C329.821,374.048,327.062,397.105,311.344,412.823z M384.459,245.411c-3.952,3.952-118.23,118.23-120.263,120.263l-117.87-117.87 L266.589,127.54c17.187-17.187,36.928-30.953,58.242-41.029l100.657,100.657C415.412,208.483,401.646,228.224,384.459,245.411z M438.187,152.721L359.28,73.812c27.01-7.308,55.541-9.16,83.963-5.055C447.347,97.179,445.495,125.71,438.187,152.721z"></path> </g> </g> </g></svg>
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
