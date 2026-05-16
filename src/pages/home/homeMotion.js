export const easing = [0.16, 1, 0.3, 1]

export const createMotionProps = (prefersReducedMotion) =>
  prefersReducedMotion ? { initial: false, animate: 'show' } : { initial: 'hidden', animate: 'show' }

export const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

export const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easing,
    },
  },
}

export const imageVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.985,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.95,
      ease: easing,
    },
  },
}

export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      delay: 0.15,
      ease: easing,
    },
  },
}
