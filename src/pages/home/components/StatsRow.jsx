import { motion } from 'framer-motion'
import { stats } from '../homeData.js'
import { containerVariants, itemVariants } from '../homeMotion.js'
import StatItem from './StatItem.jsx'

function StatsRow({ motionProps }) {
  return (
    <motion.section
      id="process"
      className="mt-5 border-t border-[color:var(--line)] pt-5"
      {...motionProps}
      variants={containerVariants}
    >
      <div className="grid gap-5 md:grid-cols-4">
        {stats.map((stat, index) => (
          <StatItem key={`${stat.label}-${index}`} stat={stat} variants={itemVariants} />
        ))}
      </div>
    </motion.section>
  )
}

export default StatsRow
