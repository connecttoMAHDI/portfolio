import { motion } from 'framer-motion'
import { stats } from '../homeData.js'
import { containerVariants, itemVariants } from '../homeMotion.js'
import StatItem from './StatItem.jsx'

function StatsRow({ motionProps }) {
  return (
    <motion.section
      id="process"
      className="mt-6 border-t border-[color:var(--line)] pt-6 scroll-mt-28 sm:mt-7 sm:pt-7 sm:scroll-mt-32"
      {...motionProps}
      variants={containerVariants}
    >
      <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatItem key={`${stat.label}-${index}`} stat={stat} variants={itemVariants} />
        ))}
      </div>
    </motion.section>
  )
}

export default StatsRow
