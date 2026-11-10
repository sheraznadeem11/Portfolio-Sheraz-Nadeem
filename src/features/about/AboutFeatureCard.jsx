function AboutFeatureCard({ title, description }) {
  return (
    <article
      className="portfolio-card rounded-[22px] border border-black/5 bg-white/80 p-6 shadow-card"
      data-reveal
    >
      <h3 className="mb-2 text-2xl font-bold tracking-tight">{title}</h3>
      <p className="text-muted">{description}</p>
    </article>
  );
}

export default AboutFeatureCard;
