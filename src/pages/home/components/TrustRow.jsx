import { motion } from 'framer-motion'
import { logos } from '../homeData.js'
import { containerVariants, itemVariants } from '../homeMotion.js'

function TrustRow({ motionProps }) {
  return (
    <motion.section
      id="selected-work"
      className="mt-8 border-t border-[color:var(--line)] pt-6 lg:mt-8 lg:pt-6"
      {...motionProps}
      variants={containerVariants}
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center">
        <motion.p
          className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-[color:var(--muted)]"
          variants={itemVariants}
        >
          Trusted by ambitious brands
        </motion.p>

        <motion.ul
          className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[0.78rem] font-medium tracking-[0.14em] uppercase text-[color:var(--muted-strong)] sm:gap-x-10"
          variants={containerVariants}
        >
          {logos.map((logo) => (
            <motion.li key={logo} variants={itemVariants}>
              {logo}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  )
}

export default TrustRow
