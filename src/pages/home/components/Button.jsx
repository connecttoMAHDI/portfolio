import { motion, useReducedMotion } from 'framer-motion'

const variantStyles = {
  primary:
    'inline-flex items-center justify-center gap-2 rounded-full bg-[oklch(15%_0.014_74)] px-5 py-2.5 text-sm font-medium text-[color:var(--bg)]',
  underline:
    'inline-flex justify-center items-center gap-2 border-b border-[color:var(--line)] pb-1 text-sm font-medium text-[color:var(--muted-strong)] transition-colors duration-300 ease-out hover:text-[color:var(--fg)]',
  link: 'inline-flex items-center gap-2 text-sm font-medium text-[color:var(--muted-strong)] transition-colors duration-300 ease-out hover:text-[color:var(--fg)]',
}

const motionVariants = {
  primary: {
    whileHover: { y: -2 },
    whileTap: { scale: 0.98 },
  },
  underline: {
    whileHover: { x: 2 },
  },
  link: {
    whileHover: { x: 2 },
  },
}

function Button({
  children,
  className = '',
  href,
  icon,
  variant = 'primary',
  variants,
  ...props
}) {
  const prefersReducedMotion = useReducedMotion() ?? false
  const variantClassName = variantStyles[variant] ?? variantStyles.primary
  const motionProps = prefersReducedMotion ? {} : motionVariants[variant] ?? motionVariants.primary
  const iconClassName = variant === 'primary' ? 'text-[0.9em]' : 'text-[0.92em]'

  return (
    <motion.a
      href={href}
      className={`${variantClassName} ${className}`.trim()}
      variants={variants}
      {...motionProps}
      {...props}
    >
      <span>{children}</span>
      {icon ? (
        <span aria-hidden="true" className={iconClassName}>
          {icon}
        </span>
      ) : null}
    </motion.a>
  )
}

export default Button
