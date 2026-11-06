import { useCallback, useEffect, useState } from 'react';

const navigation = [
  ['About', '#about'],
  ['Services', '#services'],
  ['Products', '#products'],
  ['Process', '#process'],
  ['Team', '#team'],
  ['Insights', '#insights'],
  ['Contact', '#contact'],
];

const statistics = [
  ['10+', 'Years of excellence'],
  ['200+', 'Projects delivered'],
  ['170+', 'Clients worldwide'],
  ['200+', 'Startups shaped'],
];

const features = [
  {
    title: 'Social Empowerment',
    description:
      'Providing free technical education to youth and empowering individuals with practical skill-building opportunities.',
  },
  {
    title: 'Tech Innovation',
    description:
      'Building modern, AI-powered and future-ready solutions that help businesses scale ethically and efficiently.',
  },
  {
    title: 'Leadership Growth',
    description:
      'Mentoring professionals and founders with career acceleration, market readiness, and real-world insight.',
  },
];

const services = [
  {
    title: 'AI Solutions Architecture',
    description:
      'Designing scalable AI systems tailored to real business challenges and growth strategy.',
  },
  {
    title: 'AI-Driven Strategy',
    description:
      'Transforming data, automation, and innovation into measurable competitive advantage.',
  },
  {
    title: 'Blockchain Integration',
    description:
      'Creating secure digital experiences with modern infrastructure and trusted systems.',
  },
  {
    title: 'Mentorship & Growth',
    description:
      'Helping founders and teams unlock better decisions, skills, and business momentum.',
  },
];

const processSteps = [
  ['Data Analysis', 'We analyze data to uncover patterns that drive better decisions.'],
  ['Solution Mapping', 'User needs are translated into practical, high-value solutions.'],
  ['Model Creation', 'AI models are designed using real-world insights and business context.'],
  [
    'Deployment & Integration',
    'Systems are integrated smoothly to deliver immediate operational value.',
  ],
];

const products = [
  {
    title: 'AI Legal Contract Analyzer',
    description: 'Automated legal document intelligence for fast, reliable review.',
    theme: 'from-indigo-500 to-sky-300',
  },
  {
    title: 'Jinnalyst',
    description: 'Analytics and insight systems powered by smart automation.',
    theme: 'from-slate-800 to-indigo-500',
  },
  {
    title: 'AI Powered HIMS',
    description: 'Healthcare information management through intelligent workflows.',
    theme: 'from-teal-500 to-sky-200',
  },
  {
    title: 'Sheraz AI Assistant',
    description: 'Demo project: AI guidance for trends, strategy, and career development.',
    theme: 'from-violet-500 to-emerald-300',
  },
];

const team = [
  ['Dr. Sheraz Naseer', 'Strategy Advisor'],
  ['Dr. Tazeen Rizvi', 'Research & Innovation'],
  ['Sheraz Nadeem', 'Founder & Visionary'],
  ['Prof Dr. Javed Iqbal', 'Academic Mentor'],
];

const articles = [
  'The Real ROI of Artificial Intelligence – Beyond the Hype',
  'Deep Learning Decoded – How Neural Networks Are Changing the Game',
  'Machine Learning Isn’t Just for Big Tech — Here’s Where It Wins',
];

const testimonials = [
  [
    '“This is a stellar team! I have assigned new contracts to them for several years. A joy to work with. Smart people. Good people. Honest. Hard working. Excellent results.”',
    'President of Treaty Health',
  ],
  [
    '“Their strategic perspective and technical execution helped us move from idea to implementation with confidence and clarity.”',
    'CEO of Drive',
  ],
];

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReducedMotion(preference.matches);

    updatePreference();
    preference.addEventListener('change', updatePreference);
    return () => preference.removeEventListener('change', updatePreference);
  }, []);

  return reducedMotion;
}

function Preloader({ onFinished }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const hideTimer = window.setTimeout(() => setHidden(true), 700);
    const removeTimer = window.setTimeout(onFinished, 1350);
    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(removeTimer);
    };
  }, [onFinished]);

  return (
    <div className={`preloader fixed inset-0 z-[1000] grid place-items-center bg-canvas/95 backdrop-blur-md ${hidden ? 'is-hidden' : ''}`}>
      <h1 className="animate-loader text-center text-[clamp(2.8rem,6vw,7rem)] font-extrabold leading-none tracking-[-0.09em] text-ink/20">
        SHERAZ NADEEM
      </h1>
    </div>
  );
}

function CustomCursor({ reducedMotion }) {
  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (reducedMotion || !finePointer) return undefined;

    const dot = document.querySelector('.custom-cursor-dot');
    const ring = document.querySelector('.custom-cursor-ring');
    if (!dot || !ring) return undefined;

    document.body.classList.add('custom-cursor-active');
    let targetX = 0;
    let targetY = 0;
    let ringX = 0;
    let ringY = 0;
    let animationFrame = 0;
    let lastFrameTime = 0;
    let initialized = false;

    const followPointer = (time) => {
      const frameScale = lastFrameTime
        ? Math.min((time - lastFrameTime) / 16.67, 2)
        : 1;
      lastFrameTime = time;
      const easing = 1 - Math.pow(0.78, frameScale);
      const previousX = ringX;
      const previousY = ringY;
      ringX += (targetX - ringX) * easing;
      ringY += (targetY - ringY) * easing;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;

      const velocityX = ringX - previousX;
      const velocityY = ringY - previousY;
      const speed = Math.hypot(velocityX, velocityY);
      if (speed > 0.05) {
        ring.style.setProperty(
          '--cursor-angle',
          `${Math.atan2(velocityY, velocityX)}rad`,
        );
      }
      ring.style.setProperty(
        '--cursor-stretch',
        `${1 + Math.min(speed / 50, 0.4)}`,
      );

      if (Math.abs(targetX - ringX) > 0.2 || Math.abs(targetY - ringY) > 0.2) {
        animationFrame = window.requestAnimationFrame(followPointer);
      } else {
        ring.style.left = `${targetX}px`;
        ring.style.top = `${targetY}px`;
        ring.style.setProperty('--cursor-stretch', '1');
        lastFrameTime = 0;
        animationFrame = 0;
      }
    };

    const onPointerMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      dot.style.left = `${targetX}px`;
      dot.style.top = `${targetY}px`;

      if (!initialized) {
        ringX = targetX;
        ringY = targetY;
        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;
        initialized = true;
      }

      if (!animationFrame) animationFrame = window.requestAnimationFrame(followPointer);
    };

    const onPointerOver = (event) => {
      if (event.target instanceof Element && event.target.closest('a, button, [role="button"]')) {
        dot.classList.add('is-hovering');
        ring.classList.add('is-hovering');
      }
    };

    const onPointerOut = (event) => {
      if (
        event.target instanceof Element &&
        event.target.closest('a, button, [role="button"]') &&
        !(
          event.relatedTarget instanceof Element &&
          event.relatedTarget.closest('a, button, [role="button"]')
        )
      ) {
        dot.classList.remove('is-hovering');
        ring.classList.remove('is-hovering');
      }
    };

    const onPointerLeave = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };
    const onPointerEnter = () => {
      dot.style.opacity = '';
      ring.style.opacity = '';
    };

    window.addEventListener('pointermove', onPointerMove);
    document.addEventListener('pointerover', onPointerOver);
    document.addEventListener('pointerout', onPointerOut);
    document.addEventListener('pointerleave', onPointerLeave);
    document.addEventListener('pointerenter', onPointerEnter);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerover', onPointerOver);
      document.removeEventListener('pointerout', onPointerOut);
      document.removeEventListener('pointerleave', onPointerLeave);
      document.removeEventListener('pointerenter', onPointerEnter);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [reducedMotion]);

  return (
    <>
      <div className="custom-cursor-dot" aria-hidden="true" />
      <div className="custom-cursor-ring" aria-hidden="true" />
    </>
  );
}

function useScrollReveal(reducedMotion) {
  useEffect(() => {
    const targets = document.querySelectorAll('[data-reveal]');
    if (reducedMotion || !('IntersectionObserver' in window)) {
      targets.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    targets.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${(index % 4) * 70}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [reducedMotion]);
}

function ScrollToTop({ reducedMotion }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const updateProgress = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0);
        setVisible(window.scrollY > 300);
        frame = 0;
      });
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <button
      className={`scroll-progress fixed bottom-7 right-7 z-20 grid h-[54px] w-[54px] place-items-center rounded-full bg-white text-2xl text-brand shadow-lg transition-all duration-300 hover:-translate-y-1 ${
        visible ? 'is-visible' : ''
      }`}
      type="button"
      aria-label="Scroll to top"
      onClick={() =>
        window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
      }
    >
      <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100" aria-hidden="true">
        <circle className="scroll-progress-track" cx="50" cy="50" r="46" />
        <circle
          className="scroll-progress-value"
          cx="50"
          cy="50"
          r="46"
          style={{ strokeDashoffset: 289 * (1 - progress) }}
        />
      </svg>
      <span aria-hidden="true">↑</span>
    </button>
  );
}

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

function App() {
  const reducedMotion = useReducedMotion();
  const [loading, setLoading] = useState(true);
  const finishLoading = useCallback(() => setLoading(false), []);

  useScrollReveal(reducedMotion);

  useEffect(() => {
    document.title = 'Sheraz Nadeem | AI Expert & Entrepreneur';
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-canvas text-ink">
      {loading && <Preloader onFinished={finishLoading} />}
      <CustomCursor reducedMotion={reducedMotion} />

      <header className="site-header container mx-auto flex max-w-page flex-col items-center gap-4 px-4 py-7 xl:flex-row xl:justify-start">
        <a className="text-3xl font-extrabold tracking-[0.08em] text-ink/80" href="#top">
          SHERAZ
        </a>
        <nav className="site-nav flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-muted xl:absolute xl:left-1/2 xl:-translate-x-1/2 xl:flex-nowrap">
          {navigation.map(([label, href]) => (
            <a className="transition-colors hover:text-brand" href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-page items-center gap-12 px-4 pb-12 pt-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14 lg:py-12">
          <div className="hero-content pt-2 lg:pt-7">
            <span className="mb-0 inline-block text-xs font-extrabold uppercase tracking-[0.15em] text-brand">
              AI Expert | Tech Entrepreneur | Philanthropist
            </span>
            <span className="hero-ripple" aria-hidden="true">
              {Array.from({ length: 6 }, (_, index) => <span key={index} />)}
            </span>
            <h1 className="m-0 text-[clamp(3.2rem,8vw,8rem)] font-extrabold leading-[0.9] tracking-[-0.09em] text-ink/15">
              SHERAZ NADEEM
            </h1>
            <p className="mt-7 max-w-[660px] text-lg text-muted">
              AI expert, entrepreneur, and changemaker empowering businesses through
              innovation, leadership, education, and technology-driven growth for the next
              generation of impact-makers.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <a className="button-primary" href="#about">Watch My Story</a>
              <a className="button-secondary" href="#contact">Subscribe Now</a>
            </div>
          </div>

          <div className="grid min-h-[360px] place-items-center lg:min-h-[430px]" aria-label="Profile image">
            <div className="profile-wrap relative aspect-[1/1.18] w-full max-w-[370px] overflow-hidden rounded-[28px] border border-black/5 bg-gradient-to-br from-white/90 to-indigo-50/90 p-[18px] shadow-float">
              <img
                className="relative z-[1] h-full w-full rounded-[22px] object-cover"
                src="/assets/sheraz-nadeem.png"
                alt="Sheraz Nadeem, portfolio owner"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-page px-4" aria-label="Portfolio statistics">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {statistics.map(([number, label]) => (
              <div className="stat-card rounded-[22px] border border-black/5 bg-white/70 px-5 py-7 text-center shadow-sm" data-reveal key={label}>
                <strong className="block text-4xl font-extrabold tracking-[-0.06em] text-brand-dark">{number}</strong>
                <span className="font-semibold text-muted">{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-page scroll-mt-8 px-4 pt-24">
          <SectionHeading eyebrow="About Me" centered>
            A Journey from Hardship to Leadership
          </SectionHeading>
          <div className="grid items-start gap-7 lg:grid-cols-[0.9fr_1.1fr]">
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
            <div className="grid gap-4">
              {features.map(({ title, description }) => (
                <article className="portfolio-card rounded-[22px] border border-black/5 bg-white/80 p-6 shadow-card" data-reveal key={title}>
                  <h3 className="mb-2 text-2xl font-bold tracking-tight">{title}</h3>
                  <p className="text-muted">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-page scroll-mt-8 px-4 pt-24">
          <SectionHeading eyebrow="Consulting & Advisory">
            Why Choose Sheraz Nadeem as Your Trusted Leader
          </SectionHeading>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map(({ title, description }, index) => (
              <article className="portfolio-card rounded-[22px] border border-black/5 bg-white/80 p-6 shadow-card" data-reveal key={title}>
                <div className="mb-5 grid h-[52px] w-[52px] place-items-center rounded-2xl bg-brand/10 font-extrabold text-brand-dark">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="mb-2 text-xl font-bold tracking-tight">{title}</h3>
                <p className="text-muted">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="mx-auto max-w-page scroll-mt-8 px-4 pt-24">
          <SectionHeading eyebrow="Our Proven Process" centered>
            Advancing Innovation, Leadership, and Impact
          </SectionHeading>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {processSteps.map(([title, description], index) => (
              <article className="portfolio-card rounded-[22px] border border-black/5 bg-white/80 p-6 shadow-card" data-reveal key={title}>
                <span className="mb-5 grid h-[52px] w-[52px] place-items-center rounded-2xl bg-brand/10 font-extrabold text-brand-dark">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mb-2 text-xl font-bold tracking-tight">{title}</h3>
                <p className="text-muted">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="products" className="mx-auto max-w-page scroll-mt-8 px-4 pt-24">
          <SectionHeading eyebrow="Ventures & Products">
            AI Products Built for Real Business Impact
          </SectionHeading>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {products.map(({ title, description, theme }) => (
              <article className="portfolio-card overflow-hidden rounded-[22px] border border-black/5 bg-white/80 shadow-card" data-reveal key={title}>
                <div className={`h-[185px] bg-gradient-to-br ${theme}`} aria-hidden="true" />
                <div className="p-5">
                  <h3 className="mb-2 text-xl font-bold tracking-tight">{title}</h3>
                  <p className="text-muted">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="team" className="mx-auto max-w-page scroll-mt-8 px-4 pt-24">
          <SectionHeading eyebrow="Meet My Expert Team" centered>
            People Who Help Build Powerful Results
          </SectionHeading>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {team.map(([name, title], index) => (
              <article className="portfolio-card rounded-[22px] border border-black/5 bg-white/80 px-5 py-6 text-center shadow-card" data-reveal key={name}>
                <div className={`mx-auto mb-4 h-[120px] w-[120px] rounded-full border border-brand/15 bg-gradient-to-br ${index % 2 ? 'from-sky-100 to-emerald-50' : 'from-violet-100 to-blue-50'}`} />
                <h3 className="mb-1 text-xl font-bold tracking-tight">{name}</h3>
                <span className="text-muted">{title}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-page px-4 pt-24">
          <SectionHeading eyebrow="What Happy Clients Says About Us?" centered>
            Trusted by teams building what’s next
          </SectionHeading>
          <div className="grid gap-5 md:grid-cols-2">
            {testimonials.map(([quote, attribution]) => (
              <blockquote className="portfolio-card rounded-[22px] border border-black/5 bg-white/80 p-7 text-base shadow-card" data-reveal key={attribution}>
                {quote}
                <footer className="mt-5 font-extrabold text-brand-dark">{attribution}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="insights" className="mx-auto max-w-page scroll-mt-8 px-4 pt-24">
          <SectionHeading eyebrow="Latest Blog">Fresh ideas and AI insights</SectionHeading>
          <div className="grid gap-5 md:grid-cols-3">
            {articles.map((title, index) => (
              <article className="portfolio-card overflow-hidden rounded-[22px] border border-black/5 bg-white/80 shadow-card" data-reveal key={title}>
                <div className={`h-[220px] bg-gradient-to-br ${['from-indigo-500/80 to-sky-300/70', 'from-slate-900 to-indigo-500/70', 'from-teal-700 to-sky-200'][index]}`} aria-hidden="true" />
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight">{title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-page scroll-mt-8 px-4 pt-24">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[22px] border border-black/5 bg-gradient-to-br from-brand/10 to-sky-300/10 p-6 shadow-card sm:p-8 lg:flex-row lg:items-center" data-reveal>
            <div>
              <span className="mb-4 inline-block text-xs font-extrabold uppercase tracking-[0.15em] text-brand">
                Contact With Me
              </span>
              <h2 className="max-w-[700px] text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold leading-tight tracking-[-0.06em]">
                Whether you have a question, collaboration idea, or just want to connect —
                feel free to reach out.
              </h2>
            </div>
            <a className="button-primary shrink-0" href="mailto:hello@sheraznadeem.com">
              Get in Touch
            </a>
          </div>
        </section>
      </main>

      <ScrollToTop reducedMotion={reducedMotion} />

      <footer className="mx-auto flex max-w-page flex-col items-center gap-5 px-4 pb-16 pt-10 text-center text-muted lg:flex-row lg:justify-between lg:text-left">
        <a className="text-3xl font-extrabold tracking-[0.08em] text-ink/80" href="#top">SHERAZ</a>
        <nav className="flex flex-wrap justify-center gap-5" aria-label="Footer navigation">
          {[
            ['About', '#about'],
            ['Consulting', '#services'],
            ['Blog', '#insights'],
            ['Contact', '#contact'],
          ].map(([label, href]) => (
            <a className="transition-colors hover:text-brand" href={href} key={href}>{label}</a>
          ))}
        </nav>
        <nav className="flex gap-3" aria-label="Social profiles">
          <a className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-bold transition-colors hover:text-brand" href="https://github.com/sheraznadeem11" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-bold transition-colors hover:text-brand" href="https://www.linkedin.com/in/sheraz-nadeem-aa89762a5/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </nav>
        <p>© {new Date().getFullYear()} Sheraz Nadeem AI. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
