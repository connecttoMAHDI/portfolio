import { motion } from 'framer-motion'
import { headerCta, navLinks, siteMark } from '../homeData.js'
import { containerVariants, itemVariants } from '../homeMotion.js'

function Header({ motionProps }) {
  return (
    <motion.header
      className="border-b border-[color:var(--line)] pb-3"
      {...motionProps}
      variants={containerVariants}
    >
      <div className="flex items-center justify-between gap-4">
        <motion.a
          href="#top"
          className="text-[1rem] font-medium tracking-[0.36em] text-[color:var(--fg)]"
          variants={itemVariants}
        >
          {siteMark}
        </motion.a>

        <nav className="mt-3 flex flex-wrap items-center gap-x-7 gap-y-2 text-sm text-[color:var(--muted-strong)] md:mt-0 md:justify-center md:gap-x-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="transition-colors duration-300 ease-out hover:text-[color:var(--fg)]"
              variants={itemVariants}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <motion.a
          href={headerCta.href}
          className="hidden rounded-full bg-[oklch(16%_0.014_74)] px-5 py-3 text-sm font-medium text-[color:var(--bg)] transition-transform duration-300 ease-out hover:-translate-y-0.5 md:inline-flex md:items-center md:gap-2"
          variants={itemVariants}
        >
          {headerCta.label}
          <span aria-hidden="true" className="text-[0.9em]">
            ↗
          </span>
        </motion.a>
      </div>
    </motion.header>
  )
}

export default Header
