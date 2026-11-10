function SectionHeading({ eyebrow, children, centered = false }) {
  return (
    <div className={`mb-8 ${centered ? 'text-center' : ''}`} data-reveal>
      <span className="mb-4 inline-block text-xs font-extrabold uppercase tracking-[0.15em] text-brand">
        {eyebrow}
      </span>
      <h2 className="text-[clamp(2.2rem,4vw,3.4rem)] font-extrabold leading-[1.05] tracking-[-0.06em] text-ink">
        {children}
      </h2>
    </div>
  );
}

export default SectionHeading;
