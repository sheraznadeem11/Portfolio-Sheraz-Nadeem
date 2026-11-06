const preloader = document.querySelector('.preloader');

if (preloader) {
  window.addEventListener(
    'load',
    () => {
      setTimeout(() => {
        preloader.classList.add('hidden');
      }, 700);
    },
    { once: true },
  );
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

if (!reducedMotion && finePointer) {
  const cursorDot = document.querySelector('.custom-cursor-dot');
  const cursorRing = document.querySelector('.custom-cursor-ring');

  if (cursorDot && cursorRing) {
    document.body.classList.add('custom-cursor-active');

    window.addEventListener('pointermove', (event) => {
      cursorDot.style.left = `${event.clientX}px`;
      cursorDot.style.top = `${event.clientY}px`;
      cursorRing.style.left = `${event.clientX}px`;
      cursorRing.style.top = `${event.clientY}px`;
    });

    document.addEventListener('pointerover', (event) => {
      if (event.target instanceof Element && event.target.closest('a, button, [role="button"]')) {
        cursorDot.classList.add('is-hovering');
        cursorRing.classList.add('is-hovering');
      }
    });

    document.addEventListener('pointerout', (event) => {
      if (
        event.target instanceof Element &&
        event.target.closest('a, button, [role="button"]') &&
        !(event.relatedTarget instanceof Element &&
          event.relatedTarget.closest('a, button, [role="button"]'))
      ) {
        cursorDot.classList.remove('is-hovering');
        cursorRing.classList.remove('is-hovering');
      }
    });

    document.addEventListener('pointerleave', () => {
      cursorDot.style.opacity = '0';
      cursorRing.style.opacity = '0';
    });

    document.addEventListener('pointerenter', () => {
      cursorDot.style.opacity = '';
      cursorRing.style.opacity = '';
    });
  }
}

const revealTargets = document.querySelectorAll(
  '.section-header, .stat-card, .about-copy, .feature-item, .service-card, .step-card, .product-card, .team-card, blockquote, .blog-card, .cta-box',
);

if (!reducedMotion && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  revealTargets.forEach((element, index) => {
    element.classList.add('reveal-on-scroll');
    element.style.setProperty('--reveal-delay', `${(index % 4) * 70}ms`);
    revealObserver.observe(element);
  });
}

const scrollProgress = document.querySelector('.scroll-progress');
const progressCircle = document.querySelector('.scroll-progress-value');
const updateScrollProgress = () => {
  if (!scrollProgress || !progressCircle) return;

  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
  progressCircle.style.strokeDashoffset = `${289 * (1 - progress)}`;
  scrollProgress.classList.toggle('is-visible', window.scrollY > 300);
};

if (scrollProgress) {
  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  window.addEventListener('resize', updateScrollProgress);
  updateScrollProgress();

  scrollProgress.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? 'auto' : 'smooth',
    });
  });
}
