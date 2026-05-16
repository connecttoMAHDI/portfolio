import { motion } from 'framer-motion'
import { cardVariants } from '../homeMotion.js'

function AvailabilityCard({ motionProps }) {
  return (
    <motion.div
      className="mt-4 min-w-80 w-full md:absolute md:bottom-6 md:right-0 md:mt-0 md:w-[15rem]"
      {...motionProps}
      variants={cardVariants}
    >
      <div className="rounded-[1.2rem] border border-[color:var(--line)] bg-[color:var(--panel)] px-4 py-3.5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[color:var(--fg)]/70" />
          <span className="text-[0.72rem] font-medium uppercase tracking-[0.1em] text-[color:var(--muted)]">
            Open for select projects.
          </span>
        </div>
        <p className="mt-2 text-sm leading-6 text-[color:var(--muted-strong)]">Replies within one business day.</p>
      </div>
    </motion.div>
  )
}

export default AvailabilityCard
