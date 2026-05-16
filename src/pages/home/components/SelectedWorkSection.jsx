import { motion } from 'framer-motion'
import Button from './Button.jsx'
import SectionContainer from './SectionContainer.jsx'
import { selectedWorkIntro, selectedWorkProjects } from '../homeData.js'
import { containerVariants, itemVariants } from '../homeMotion.js'

function SelectedWorkSection({ motionProps }) {
  return (
    <motion.section
      id="selected-work"
      aria-labelledby="selected-work-title"
      className="w-full scroll-mt-28 bg-[color:var(--section-wash)] py-14 sm:py-16 md:py-20 lg:py-[120px] sm:scroll-mt-32"
      {...motionProps}
      variants={containerVariants}
    >
      <SectionContainer>
        <div className="space-y-6 lg:space-y-10">
          <motion.div
            className="grid gap-5 border-b border-[color:var(--line)] pb-6 sm:gap-6 sm:pb-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)_auto] lg:items-end lg:gap-8 lg:pb-10"
            variants={containerVariants}
          >
            <div className="max-w-[28rem]">
              <motion.p
                className="text-[0.7rem] font-medium uppercase tracking-[0.34em] text-[color:var(--muted)]"
                variants={itemVariants}
              >
                {selectedWorkIntro.eyebrow}
              </motion.p>

              <motion.h2
                id="selected-work-title"
                className="mt-4 max-w-[13ch] font-brand-serif text-[clamp(2.35rem,4vw,4.5rem)] font-light leading-[0.92] tracking-[-0.075em] text-[color:var(--fg)]"
                variants={itemVariants}
              >
                {selectedWorkIntro.title}
              </motion.h2>
            </div>

            <motion.p
              className="max-w-[34ch] text-[0.95rem] leading-[1.6] text-[color:var(--muted-strong)] sm:text-[1rem]"
              variants={itemVariants}
            >
              {selectedWorkIntro.description}
            </motion.p>

            <Button
              href={selectedWorkIntro.cta.href}
              className="self-start lg:justify-self-end"
              icon="→"
              variant="underline"
              variants={itemVariants}
            >
              {selectedWorkIntro.cta.label}
            </Button>
          </motion.div>

          <motion.div className="space-y-6 lg:space-y-7" variants={containerVariants}>
            <ProjectCard project={selectedWorkProjects[0]} featured />

            <motion.div className="grid gap-6 lg:grid-cols-2" variants={containerVariants}>
              {selectedWorkProjects.slice(1).map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </SectionContainer>
    </motion.section>
  )
}

function ProjectCard({ project, featured = false }) {
  return (
    <motion.article
      className="overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--panel)]"
      variants={itemVariants}
    >
      <div
        className={`grid h-full ${
          featured
            ? 'lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)]'
            : 'lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)]'
        }`}
      >
        <ProjectImage image={project.image} featured={featured} />

        <div className={`flex flex-col justify-between gap-5 p-4 sm:p-6 lg:p-8 ${featured ? 'lg:p-8' : 'lg:p-7'}`}>
          <div className="space-y-2.5">
            <p className="text-[0.66rem] font-medium uppercase tracking-[0.34em] text-[color:var(--muted)]">
              {project.eyebrow}
            </p>

            <h3
              className={`font-brand-serif font-light leading-[0.94] tracking-[-0.075em] text-[color:var(--fg)] ${
                featured ? 'text-[clamp(2.15rem,3vw,3.55rem)]' : 'text-[clamp(1.85rem,2.3vw,2.85rem)]'
              }`}
            >
              {project.title}
            </h3>

            <p className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-[color:var(--muted)]">
              {project.category}
            </p>

            <p className={`text-[0.95rem] leading-[1.62] text-[color:var(--muted-strong)] ${featured ? 'max-w-[38ch]' : 'max-w-[32ch]'}`}>
              {project.description}
            </p>
          </div>

          <div className="space-y-5">
            {project.services ? (
              <div className="space-y-2.5">
                <p className="text-[0.66rem] font-medium uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  Services
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-[color:var(--line)] bg-[color:var(--highlight)] px-3 py-1 text-[0.7rem] font-medium text-[color:var(--muted-strong)]"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            <Button
              href={project.cta.href}
              icon="→"
              variant="link"
            >
              {project.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function ProjectImage({ image, featured }) {
  return (
    <div
      className={`relative min-h-[14rem] overflow-hidden bg-[color:var(--surface)] sm:min-h-[16rem] ${
        featured ? 'lg:min-h-[31rem]' : 'lg:min-h-[24rem]'
      }`}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}

export default SelectedWorkSection
