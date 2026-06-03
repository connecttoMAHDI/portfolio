import { motion } from 'framer-motion'
import Button from './Button.jsx'
import SectionContainer from './SectionContainer.jsx'
import SectionHeader from './SectionHeader.jsx'
import { selectedWorkIntro, selectedWorkProjects } from '../homeData.js'
import { containerVariants, itemVariants } from '../homeMotion.js'

function SelectedWorkSection({ motionProps }) {
  return (
    <motion.section
      id="selected-work"
      aria-labelledby="selected-work-title"
      className="living-work-section relative isolate w-full scroll-mt-28 overflow-hidden bg-[color:var(--section-wash)] py-14 sm:py-16 md:py-20 lg:py-[120px] sm:scroll-mt-32"
      {...motionProps}
      variants={containerVariants}
    >
      <SectionContainer className="relative z-10">
        <div className="space-y-6 lg:space-y-10">
          <SectionHeader
            titleId="selected-work-title"
            eyebrow={selectedWorkIntro.eyebrow}
            title={selectedWorkIntro.title}
            description={selectedWorkIntro.description}
            titleClassName="mt-4 max-w-[13ch] text-[clamp(2.35rem,4vw,4.5rem)] leading-[0.92]"
            descriptionClassName="max-w-[34ch] text-[0.95rem] leading-[1.6] sm:text-[1rem]"
          />

          <motion.div className="space-y-6 lg:space-y-7" variants={containerVariants}>
            <ProjectCard project={selectedWorkProjects[0]} featured index={0} />

            <motion.div className="grid gap-6 lg:grid-cols-2" variants={containerVariants}>
              {selectedWorkProjects.slice(1).map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index + 1} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </SectionContainer>
    </motion.section>
  )
}

function ProjectCard({ project, featured = false, index }) {
  return (
    <motion.article
      className="living-project-card overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--panel)]"
      variants={itemVariants}
    >
      <div
        className={`grid h-full ${
          featured
            ? 'lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)]'
            : 'lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)]'
        }`}
      >
        <ProjectImage frameNumber={String(index + 1).padStart(2, '0')} image={project.image} featured={featured} />

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

function ProjectImage({ frameNumber, image, featured }) {
  return (
    <div
      className={`living-work-frame relative min-h-[14rem] overflow-hidden bg-[color:var(--surface)] sm:min-h-[16rem] ${
        featured ? 'lg:min-h-[31rem]' : 'lg:min-h-[24rem]'
      }`}
      data-frame={frameNumber}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="living-work-frame__image absolute inset-0 h-full w-full object-cover object-center"
        loading={featured ? 'eager' : 'lazy'}
        decoding="async"
      />
    </div>
  )
}

export default SelectedWorkSection
