function SectionContainer({ children, className = '', maxWidth = '1440px' }) {
  return (
    <div className={`mx-auto w-full px-5 sm:px-8 lg:px-12 xl:px-16 ${className}`.trim()} style={{ maxWidth }}>
      {children}
    </div>
  )
}

export default SectionContainer
