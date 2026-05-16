import { motion } from 'framer-motion'
import { heroImage } from '../homeData.js'
import { imageVariants } from '../homeMotion.js'
import AvailabilityCard from './AvailabilityCard.jsx'
import HeroImage from './HeroImage.jsx'

function HeroVisual({ motionProps }) {
  return (
    <motion.div className="relative lg:justify-self-end lg:pt-4" {...motionProps} variants={imageVariants}>
      <div className="relative ml-auto w-full max-w-[28rem] pb-14 md:pb-16">
        <HeroImage image={heroImage} />
        <AvailabilityCard motionProps={motionProps} />
      </div>
    </motion.div>
  )
}

export default HeroVisual
