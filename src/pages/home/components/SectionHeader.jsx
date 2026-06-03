import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../homeMotion.js'

function SectionHeader({
  titleId,
  eyebrow,
  title,
  highlight,
  description,
  className = '',
  titleClassName = 'mt-4 max-w-[11.7ch] text-[clamp(2.25rem,4vw,4.3rem)] leading-[0.94]',
  descriptionClassName = 'max-w-[36ch] text-[0.95rem] leading-[1.62] sm:text-[1rem]',
}) {
  const titleLines = Array.isArray(title) ? title : [title]

  return (
    <motion.div
      className={`grid gap-5 border-b border-[color:var(--line)] pb-6 sm:gap-6 sm:pb-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(19rem,0.82fr)] lg:items-end lg:gap-12 lg:pb-10 ${className}`.trim()}
      variants={containerVariants}
    >
      <div className="max-w-[45rem]">
        <motion.p
          className="text-[0.7rem] font-medium uppercase tracking-[0.34em] text-[color:var(--muted)]"
          variants={itemVariants}
        >
          {eyebrow}
        </motion.p>

        <motion.h2
          id={titleId}
          className={`font-brand-serif font-light tracking-[-0.075em] text-[color:var(--fg)] ${titleClassName}`.trim()}
          variants={itemVariants}
        >
          {titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
          {highlight ? (
            <span className="relative mt-2 block w-fit italic text-[color:var(--muted-strong)]">
              <span className="relative z-10">{highlight}</span>
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 bottom-[-0.30em] -z-0 h-[1.3em] md:h-[1.2em] bg-[color:var(--highlight)]"
              />
            </span>
          ) : null}
        </motion.h2>
      </div>

      <motion.p
        className={`text-[color:var(--muted-strong)] lg:justify-self-end ${descriptionClassName}`.trim()}
        variants={itemVariants}
      >
        {description}
      </motion.p>
    </motion.div>
  )
}

export default SectionHeader
