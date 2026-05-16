function HeroImage({ image }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--panel)]">
      <img
        src={image.src}
        alt={image.alt}
        className="aspect-[7/8] w-full object-cover object-[62%_center]"
        loading="eager"
        decoding="async"
      />
    </div>
  )
}

export default HeroImage
