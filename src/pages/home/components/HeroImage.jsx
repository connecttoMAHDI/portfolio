import { useReducedMotion } from 'framer-motion'

function resetPortraitMotion(element) {
  element.style.setProperty('--portrait-x', '0px')
  element.style.setProperty('--portrait-y', '0px')
  element.style.setProperty('--portrait-tilt-x', '0deg')
  element.style.setProperty('--portrait-tilt-y', '0deg')
}

function HeroImage({ image }) {
  const prefersReducedMotion = useReducedMotion() ?? false

  const handlePointerMove = (event) => {
    if (prefersReducedMotion) {
      return
    }

    const frame = event.currentTarget
    const rect = frame.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5

    frame.style.setProperty('--portrait-x', `${x * -14}px`)
    frame.style.setProperty('--portrait-y', `${y * -12}px`)
    frame.style.setProperty('--portrait-tilt-x', `${x * 2.4}deg`)
    frame.style.setProperty('--portrait-tilt-y', `${y * -2.4}deg`)
  }

  const handlePointerLeave = (event) => {
    resetPortraitMotion(event.currentTarget)
  }

  return (
    <div
      className="living-hero-frame overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--panel)]"
      data-frame="MAHDI / 01"
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="living-hero-frame__image aspect-[7/8] w-full object-cover object-[62%_center]"
        loading="eager"
        decoding="async"
      />
    </div>
  )
}

export default HeroImage
