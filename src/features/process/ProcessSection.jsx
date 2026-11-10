import SectionHeading from '../../components/common/SectionHeading.jsx';
import { processSteps } from '../../data/portfolio.js';

function ProcessStepCard({ title, description, number }) {
  return (
    <article
      className="portfolio-card rounded-[22px] border border-black/5 bg-white/80 p-6 shadow-card"
      data-reveal
    >
      <span className="mb-5 grid h-[52px] w-[52px] place-items-center rounded-2xl bg-brand/10 font-extrabold text-brand-dark">
        {number}
      </span>
      <h3 className="mb-2 text-xl font-bold tracking-tight">{title}</h3>
      <p className="text-muted">{description}</p>
    </article>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="mx-auto max-w-page scroll-mt-8 px-4 pt-24">
      <SectionHeading eyebrow="Our Proven Process" centered>
        Advancing Innovation, Leadership, and Impact
      </SectionHeading>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {processSteps.map(([title, description], index) => (
          <ProcessStepCard
            key={title}
            title={title}
            description={description}
            number={String(index + 1).padStart(2, '0')}
          />
        ))}
      </div>
    </section>
  );
}

export default ProcessSection;
