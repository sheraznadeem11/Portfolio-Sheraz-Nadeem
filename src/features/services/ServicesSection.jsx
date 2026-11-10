import SectionHeading from '../../components/common/SectionHeading.jsx';
import { services } from '../../data/portfolio.js';

function ServiceCard({ title, description, number }) {
  return (
    <article
      className="portfolio-card rounded-[22px] border border-black/5 bg-white/80 p-6 shadow-card"
      data-reveal
    >
      <div className="mb-5 grid h-[52px] w-[52px] place-items-center rounded-2xl bg-brand/10 font-extrabold text-brand-dark">
        {number}
      </div>
      <h3 className="mb-2 text-xl font-bold tracking-tight">{title}</h3>
      <p className="text-muted">{description}</p>
    </article>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-page scroll-mt-8 px-4 pt-24">
      <SectionHeading eyebrow="Consulting & Advisory">
        Why Choose Sheraz Nadeem as Your Trusted Leader
      </SectionHeading>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            {...service}
            number={String(index + 1).padStart(2, '0')}
          />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
