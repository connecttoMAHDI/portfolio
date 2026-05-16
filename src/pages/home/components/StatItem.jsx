import { motion } from 'framer-motion'

function StatItem({ stat, variants }) {
  return (
    <motion.article className="flex flex-col items-center space-y-1.5" variants={variants}>
      <div className="flex items-end gap-3">
        <span className="text-[1.8rem] font-semibold tracking-[-0.05em] text-[color:var(--fg)] tabular-nums sm:text-[1.95rem]">
          {stat.value}
        </span>
        <span className="pb-1 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-[color:var(--muted)]">
          {stat.label}
        </span>
      </div>
      <p className="max-w-[22ch] text-[0.9rem] leading-[1.45] text-[color:var(--muted-strong)]">{stat.detail}</p>
    </motion.article>
  )
}

export default StatItem
