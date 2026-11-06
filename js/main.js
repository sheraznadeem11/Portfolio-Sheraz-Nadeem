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
    let targetX = 0;
    let targetY = 0;
    let ringX = 0;
    let ringY = 0;
    let animationFrame = 0;
    let cursorInitialized = false;
    let lastFrameTime = 0;

    const followPointer = (time) => {
      const frameScale = lastFrameTime ? Math.min((time - lastFrameTime) / 16.67, 2) : 1;
      lastFrameTime = time;
      const easing = 1 - Math.pow(0.78, frameScale);
      const previousX = ringX;
      const previousY = ringY;
      ringX += (targetX - ringX) * easing;
      ringY += (targetY - ringY) * easing;
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;

      const velocityX = ringX - previousX;
      const velocityY = ringY - previousY;
      const speed = Math.hypot(velocityX, velocityY);
      if (speed > 0.05) {
        cursorRing.style.setProperty('--cursor-angle', `${Math.atan2(velocityY, velocityX)}rad`);
      }
      cursorRing.style.setProperty('--cursor-stretch', `${1 + Math.min(speed / 50, 0.4)}`);

      if (Math.abs(targetX - ringX) > 0.2 || Math.abs(targetY - ringY) > 0.2) {
        animationFrame = window.requestAnimationFrame(followPointer);
      } else {
        cursorRing.style.left = `${targetX}px`;
        cursorRing.style.top = `${targetY}px`;
        cursorRing.style.setProperty('--cursor-stretch', '1');
        lastFrameTime = 0;
        animationFrame = 0;
      }
    };

    window.addEventListener('pointermove', (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      cursorDot.style.left = `${targetX}px`;
      cursorDot.style.top = `${targetY}px`;

      if (!cursorInitialized) {
        ringX = targetX;
        ringY = targetY;
        cursorRing.style.left = `${ringX}px`;
        cursorRing.style.top = `${ringY}px`;
        cursorInitialized = true;
      }

      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(followPointer);
      }
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
