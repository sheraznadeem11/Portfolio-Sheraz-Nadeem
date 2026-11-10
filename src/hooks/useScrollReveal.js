import { useEffect } from 'react';

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

export default useScrollReveal;
