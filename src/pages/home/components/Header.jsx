import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import Button from './Button.jsx'
import SectionContainer from './SectionContainer.jsx'
import { headerCta, navLinks, siteMark } from '../homeData.js'
import { containerVariants, easing, itemVariants } from '../homeMotion.js'

const mobileNavLinks = navLinks.filter((link) => link.label !== 'Contact')
const toggleButtonClassName =
  'inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--bg)] text-[color:var(--fg)] transition-colors duration-300 ease-out hover:bg-[color:var(--highlight)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--fg)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--panel)]'

function Header({ motionProps }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion() ?? false
  const toggleButtonRef = useRef(null)
  const closeButtonRef = useRef(null)
  const wasMenuOpenRef = useRef(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')

    const closeOnDesktop = () => {
      if (mediaQuery.matches) {
        setIsMenuOpen(false)
      }
    }

    closeOnDesktop()
    mediaQuery.addEventListener('change', closeOnDesktop)

    return () => {
      mediaQuery.removeEventListener('change', closeOnDesktop)
    }
  }, [])

  useEffect(() => {
    if (!isMenuOpen) {
      if (wasMenuOpenRef.current) {
        toggleButtonRef.current?.focus()
        wasMenuOpenRef.current = false
      }

      return undefined
    }

    wasMenuOpenRef.current = true
    closeButtonRef.current?.focus()

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  const panelVariants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { duration: 0 },
        },
        exit: {
          opacity: 0,
          transition: { duration: 0 },
        },
      }
    : {
        hidden: {
          opacity: 0,
          y: -16,
          clipPath: 'inset(0 0 100% 0)',
        },
        show: {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0 0 0% 0)',
          transition: {
            duration: 0.42,
            ease: easing,
          },
        },
        exit: {
          opacity: 0,
          y: -12,
          clipPath: 'inset(0 0 100% 0)',
          transition: {
            duration: 0.3,
            ease: easing,
          },
        },
      }

  const handleCloseMenu = () => {
    setIsMenuOpen(false)
  }

  const handleToggleMenu = () => {
    setIsMenuOpen((value) => !value)
  }

  const mobileMenu =
    typeof document !== 'undefined'
      ? createPortal(
          <AnimatePresence initial={false}>
            {isMenuOpen ? (
              <motion.div
                className="fixed inset-0 z-[60] px-5 pt-4"
                style={{
                  backgroundColor: 'oklch(19.5% 0.016 74 / 0.14)',
                }}
                onClick={handleCloseMenu}
              >
                <motion.div
                  id="mobile-header-menu"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Mobile navigation"
                  className="h-[78svh] w-full overflow-hidden rounded-[28px] border border-[color:var(--line)] bg-[color:var(--bg)]"
                  onClick={(event) => event.stopPropagation()}
                  variants={panelVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <div className="flex h-full flex-col px-5 pb-5 pt-4">
                    <div className="flex items-center justify-between">
                      <a
                        href="#top"
                        className="text-[0.95rem] font-medium tracking-[0.32em] text-[color:var(--fg)]"
                        onClick={handleCloseMenu}
                      >
                        {siteMark}
                      </a>

                      <button
                        ref={closeButtonRef}
                        type="button"
                        aria-label="Close menu"
                        className={toggleButtonClassName}
                        onClick={handleCloseMenu}
                      >
                        <span aria-hidden="true" className="text-[1.35rem] leading-none">
                          ×
                        </span>
                      </button>
                    </div>

                    <nav className="mt-10 flex flex-col items-center gap-4 text-center">
                      {mobileNavLinks.map((link) => (
                        <HeaderNavLink
                          key={link.label}
                          href={link.href}
                          mobile
                          onClick={handleCloseMenu}
                        >
                          {link.label}
                        </HeaderNavLink>
                      ))}
                    </nav>

                    <div className="flex-1" />

                    <motion.div className="flex justify-center pt-6" variants={itemVariants}>
                      <Button
                        href={headerCta.href}
                        className="w-full max-w-[17.5rem]"
                        icon="↗"
                        variant="primary"
                        variants={itemVariants}
                        onClick={handleCloseMenu}
                      >
                        {headerCta.label}
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ) : null}
          </AnimatePresence>,
          document.body,
        )
      : null

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
      <div className="md:hidden">
        <div className="flex min-h-14 items-center justify-between px-5 py-4">
          <a
            href="#top"
            className="text-[0.95rem] font-medium tracking-[0.32em] text-[color:var(--fg)]"
            onClick={handleCloseMenu}
          >
            {siteMark}
          </a>

          <button
            ref={toggleButtonRef}
            type="button"
            aria-controls="mobile-header-menu"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className={toggleButtonClassName}
            onClick={handleToggleMenu}
          >
            <span aria-hidden="true" className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform duration-300 ease-out ${
                  isMenuOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 bg-current transition-all duration-300 ease-out ${
                  isMenuOpen ? 'scale-x-0 opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-px w-5 bg-current transition-transform duration-300 ease-out ${
                  isMenuOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div className="hidden md:block">
        <SectionContainer className="py-4">
          <div className="grid gap-3 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center md:gap-6">
            <a
              href="#top"
              className="justify-self-start text-[0.95rem] font-medium tracking-[0.32em] text-[color:var(--fg)] sm:text-[1rem] sm:tracking-[0.36em]"
            >
              {siteMark}
            </a>

            <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[color:var(--muted-strong)] sm:text-[0.78rem] sm:tracking-[0.14em] md:justify-center md:gap-x-8 md:text-sm md:normal-case md:tracking-[0.14em]">
              {navLinks.map((link) => (
                <HeaderNavLink key={link.label} href={link.href}>
                  {link.label}
                </HeaderNavLink>
              ))}
            </nav>

            <Button
              href={headerCta.href}
              className="hidden justify-self-end md:inline-flex"
              icon="↗"
              variant="primary"
              variants={itemVariants}
            >
              {headerCta.label}
            </Button>
          </div>
        </SectionContainer>
      </div>
      {mobileMenu}
    </motion.header>
  )
}

function HeaderNavLink({ children, href, mobile = false, onClick }) {
  return (
    <motion.a
      href={href}
      className={`group relative inline-flex w-fit items-center justify-center pb-1 transition-colors duration-300 ease-out hover:text-[color:var(--fg)] focus-visible:outline-none focus-visible:text-[color:var(--fg)] ${
        mobile
          ? 'min-h-11 px-0 py-1 text-[1.1rem] font-medium tracking-[-0.01em] text-[color:var(--fg)]'
          : 'text-[color:var(--muted-strong)]'
      }`}
      onClick={onClick}
      variants={itemVariants}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-px w-full origin-center scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
      />
    </motion.a>
  )
}

export default Header
