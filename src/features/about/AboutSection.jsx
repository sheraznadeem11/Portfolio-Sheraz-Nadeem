import SectionHeading from '../../components/common/SectionHeading.jsx';
import { features } from '../../data/portfolio.js';
import AboutFeatureCard from './AboutFeatureCard.jsx';

function AboutStory() {
  return (
    <div className="text-base leading-relaxed text-muted" data-reveal>
      <p className="mb-5">
        Sheraz Nadeem is a strategic AI expert and entrepreneur who blends
        technology, business growth, and social impact into tangible results. From
        early challenges to modern leadership, he believes in building value
        through innovation and mentorship.
      </p>
      <p>
        His work spans consulting, AI strategy, product development, and youth
        empowerment, helping organizations adopt intelligent systems while creating
        opportunities for the next generation.
      </p>
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-page scroll-mt-8 px-4 pt-24">
      <SectionHeading eyebrow="About Me" centered>
        A Journey from Hardship to Leadership
      </SectionHeading>
      <div className="grid items-start gap-7 lg:grid-cols-[0.9fr_1.1fr]">
        <AboutStory />
        <div className="grid gap-4">
          {features.map((feature) => (
            <AboutFeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
