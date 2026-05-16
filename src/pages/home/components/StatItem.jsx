import { motion } from 'framer-motion'

function StatItem({ stat, variants }) {
  return (
    <motion.article className="flex min-w-0 flex-col items-start space-y-1.5 lg:items-center lg:text-center" variants={variants}>
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className="text-[1.7rem] font-semibold tracking-[-0.05em] text-[color:var(--fg)] tabular-nums sm:text-[1.85rem]">
          {stat.value}
        </span>
        <span className="pb-1 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-[color:var(--muted)]">
          {stat.label}
        </span>
      </div>
      <p className="max-w-[24ch] text-[0.9rem] leading-[1.45] text-[color:var(--muted-strong)]">{stat.detail}</p>
    </motion.article>
  )
}

export default StatItem
