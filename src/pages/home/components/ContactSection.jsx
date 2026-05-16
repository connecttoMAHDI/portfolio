import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import SectionContainer from './SectionContainer.jsx'
import { contactForm, contactIntro } from '../homeData.js'
import { containerVariants, itemVariants } from '../homeMotion.js'

const initialFields = {
  name: '',
  email: '',
  message: '',
}

function ContactSection({ motionProps }) {
  const [fields, setFields] = useState(initialFields)
  const [errors, setErrors] = useState({})
  const [statusMessage, setStatusMessage] = useState(contactForm.status)
  const prefersReducedMotion = useReducedMotion() ?? false

  const handleFieldChange = (event) => {
    const { name, value } = event.target

    setFields((currentFields) => ({
      ...currentFields,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = validateContactFields(fields)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatusMessage('Please fill in the highlighted fields.')
      return
    }

    const subject = encodeURIComponent(`Project brief from ${fields.name}`)
    const body = encodeURIComponent(
      [`Name: ${fields.name}`, `Email: ${fields.email}`, '', 'Project brief:', fields.message].join('\n'),
    )

    window.location.href = `mailto:${contactForm.email}?subject=${subject}&body=${body}`
    setStatusMessage("Your email app is opening with the brief filled in.")
  }

  return (
    <motion.section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate w-full scroll-mt-28 overflow-hidden py-16 sm:scroll-mt-32 sm:py-20 md:py-24 lg:min-h-[calc(100svh-4.5rem)] lg:py-[120px]"
      style={{
        backgroundImage:
          'linear-gradient(90deg, oklch(98.5% 0.006 88 / 0.88), oklch(98.5% 0.006 88 / 0.68)), url("/assets/contact-background.jpg")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      {...motionProps}
      variants={containerVariants}
    >
      <SectionContainer maxWidth="1512px">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(25rem,1.08fr)] lg:items-center lg:gap-16 xl:gap-24">
          <motion.div className="max-w-[43rem]" variants={containerVariants}>
            <motion.p
              className="text-[0.7rem] font-medium uppercase tracking-[0.34em] text-[color:var(--muted)]"
              variants={itemVariants}
            >
              {contactIntro.eyebrow}
            </motion.p>

            <motion.h2
              id="contact-title"
              className="mt-6 max-w-[10.4ch] font-brand-serif text-[clamp(3.35rem,6.3vw,6.35rem)] font-light leading-[0.91] tracking-[-0.075em] text-[color:var(--fg)]"
              variants={itemVariants}
            >
              <span className="block">{contactIntro.title[0]}</span>
              <span className="block">{contactIntro.title[1]}</span>
              <span className="relative mt-2 block w-fit italic text-[color:var(--fg)]">
                <span className="relative z-10">{contactIntro.title[2]}</span>
                <span
                  aria-hidden="true"
                  className="absolute left-[-0.04em] right-[-0.04em] bottom-[-0.18em] -z-0 h-[1.25em] bg-[color:var(--highlight)]/86"
                />
              </span>
            </motion.h2>

            <motion.p
              className="mt-8 max-w-[31ch] text-[1.12rem] leading-[1.75] text-[color:var(--muted-strong)] sm:text-[1.28rem]"
              variants={itemVariants}
            >
              {contactIntro.description}
            </motion.p>

            <motion.div className="mt-9 flex flex-col gap-5 sm:mt-10 sm:flex-row sm:items-center sm:gap-9" variants={itemVariants}>
              <motion.a
                href={contactIntro.primaryCta.href}
                className="inline-flex min-h-16 items-center justify-center gap-2 rounded-full bg-[oklch(15%_0.014_74)] px-8 text-[1.05rem] font-medium text-[color:var(--bg)] transition-colors duration-300 ease-out hover:bg-[oklch(19.5%_0.016_74)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--fg)] sm:px-10 sm:text-[1.15rem]"
                whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
              >
                <span>{contactIntro.primaryCta.label}</span>
                <span aria-hidden="true">&rarr;</span>
              </motion.a>

              <motion.a
                href={contactIntro.secondaryCta.href}
                className="inline-flex min-h-12 w-fit items-center gap-2 border-b border-dotted border-[color:var(--muted)] pb-1 text-[1.08rem] font-medium text-[color:var(--muted-strong)] transition-colors duration-300 ease-out hover:text-[color:var(--fg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--fg)] sm:text-[1.15rem]"
                whileHover={prefersReducedMotion ? undefined : { x: 2 }}
              >
                <span>{contactIntro.secondaryCta.label}</span>
                <span aria-hidden="true">&darr;</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <ContactFormCard
            errors={errors}
            fields={fields}
            onChange={handleFieldChange}
            onSubmit={handleSubmit}
            statusMessage={statusMessage}
            prefersReducedMotion={prefersReducedMotion}
          />
        </div>
      </SectionContainer>
    </motion.section>
  )
}

function ContactFormCard({ errors, fields, onChange, onSubmit, statusMessage, prefersReducedMotion }) {
  return (
    <motion.form
      className="rounded-[1.65rem] border border-[oklch(77%_0.018_78)] bg-[oklch(98.2%_0.004_92/0.76)] p-5 sm:rounded-[2rem] sm:p-8 lg:p-11"
      noValidate
      onSubmit={onSubmit}
      variants={itemVariants}
    >
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[color:var(--muted)]">
        {contactForm.eyebrow}
      </p>

      <div className="mt-8 space-y-7">
        <ContactInput
          error={errors.name}
          label={contactForm.fields.name.label}
          name="name"
          onChange={onChange}
          placeholder={contactForm.fields.name.placeholder}
          value={fields.name}
        />
        <ContactInput
          error={errors.email}
          label={contactForm.fields.email.label}
          name="email"
          onChange={onChange}
          placeholder={contactForm.fields.email.placeholder}
          type="email"
          value={fields.email}
        />
        <ContactTextarea
          error={errors.message}
          label={contactForm.fields.message.label}
          name="message"
          onChange={onChange}
          placeholder={contactForm.fields.message.placeholder}
          value={fields.message}
        />
      </div>

      <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-3 text-[0.95rem] leading-[1.4] text-[color:var(--muted-strong)]" aria-live="polite">
          <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full bg-[color:var(--muted)]" />
          <span>{statusMessage}</span>
        </p>

        <motion.button
          type="submit"
          className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[oklch(15%_0.014_74)] px-8 text-[1rem] font-medium text-[color:var(--bg)] transition-colors duration-300 ease-out hover:bg-[oklch(19.5%_0.016_74)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--fg)] sm:min-w-[9.5rem]"
          whileHover={prefersReducedMotion ? undefined : { y: -2 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
        >
          <span>{contactForm.submitLabel}</span>
          <span aria-hidden="true">&rarr;</span>
        </motion.button>
      </div>
    </motion.form>
  )
}

function ContactInput({ error, label, name, onChange, placeholder, type = 'text', value }) {
  const fieldId = `contact-${name}`
  const errorId = `${fieldId}-error`

  return (
    <div>
      <label htmlFor={fieldId} className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted-strong)]">
        {label}
      </label>
      <input
        id={fieldId}
        name={name}
        type={type}
        autoComplete={name === 'email' ? 'email' : 'name'}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? errorId : undefined}
        className={`mt-4 min-h-16 w-full rounded-[0.9rem] border bg-[oklch(99%_0.004_92/0.58)] px-5 text-[1rem] text-[color:var(--fg)] outline-none transition-colors duration-300 ease-out placeholder:text-[color:var(--muted)] focus:border-[color:var(--fg)] ${
          error ? 'border-[oklch(48%_0.08_38)]' : 'border-[oklch(82%_0.015_78)]'
        }`}
      />
      {error ? (
        <p id={errorId} className="mt-2 text-[0.86rem] leading-[1.4] text-[oklch(42%_0.08_38)]">
          {error}
        </p>
      ) : null}
    </div>
  )
}

function ContactTextarea({ error, label, name, onChange, placeholder, value }) {
  const fieldId = `contact-${name}`
  const errorId = `${fieldId}-error`

  return (
    <div>
      <label htmlFor={fieldId} className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted-strong)]">
        {label}
      </label>
      <textarea
        id={fieldId}
        name={name}
        rows={5}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? errorId : undefined}
        className={`mt-4 min-h-[11rem] w-full resize-y rounded-[0.9rem] border bg-[oklch(99%_0.004_92/0.58)] px-5 py-5 text-[1rem] leading-[1.55] text-[color:var(--fg)] outline-none transition-colors duration-300 ease-out placeholder:text-[color:var(--muted)] focus:border-[color:var(--fg)] ${
          error ? 'border-[oklch(48%_0.08_38)]' : 'border-[oklch(82%_0.015_78)]'
        }`}
      />
      {error ? (
        <p id={errorId} className="mt-2 text-[0.86rem] leading-[1.4] text-[oklch(42%_0.08_38)]">
          {error}
        </p>
      ) : null}
    </div>
  )
}

function validateContactFields(fields) {
  const nextErrors = {}
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!fields.name.trim()) {
    nextErrors.name = 'Add your name.'
  }

  if (!emailPattern.test(fields.email.trim())) {
    nextErrors.email = 'Add a valid email.'
  }

  if (fields.message.trim().length < 12) {
    nextErrors.message = 'Share a few details about the project.'
  }

  return nextErrors
}

export default ContactSection
