import { motion } from 'framer-motion'
import Button from './Button.jsx'
import SectionContainer from './SectionContainer.jsx'
import { headerCta, navLinks, siteMark } from '../homeData.js'
import { containerVariants, itemVariants } from '../homeMotion.js'

function Header({ motionProps }) {
  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-[color:var(--line)]"
      style={{
        backgroundColor: 'oklch(99.2% 0.003 92 / 0.82)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
      {...motionProps}
      variants={containerVariants}
    >
      <SectionContainer className="py-4">
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

          <Button
            href={headerCta.href}
            className="hidden md:inline-flex"
            icon="↗"
            variant="primary"
            variants={itemVariants}
          >
            {headerCta.label}
          </Button>
        </div>
      </SectionContainer>
    </motion.header>
  )
}

export default Header
