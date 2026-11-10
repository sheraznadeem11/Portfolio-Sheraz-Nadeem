import SectionHeading from '../../components/common/SectionHeading.jsx';
import { testimonials } from '../../data/portfolio.js';

function TestimonialCard({ quote, attribution }) {
  return (
    <blockquote
      className="portfolio-card rounded-[22px] border border-black/5 bg-white/80 p-7 text-base shadow-card"
      data-reveal
    >
      {quote}
      <footer className="mt-5 font-extrabold text-brand-dark">{attribution}</footer>
    </blockquote>
  );
}

function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-page px-4 pt-24">
      <SectionHeading eyebrow="What Happy Clients Says About Us?" centered>
        Trusted by teams building what’s next
      </SectionHeading>
      <div className="grid gap-5 md:grid-cols-2">
        {testimonials.map(([quote, attribution]) => (
          <TestimonialCard key={attribution} quote={quote} attribution={attribution} />
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
