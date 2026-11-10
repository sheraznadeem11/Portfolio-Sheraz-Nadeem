import { useEffect, useState } from 'react';
import IconButton from '../common/IconButton.jsx';

function ScrollToTopButton({ reducedMotion }) {
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
    <IconButton
      className={`scroll-progress fixed bottom-7 right-7 z-20 grid h-[54px] w-[54px] place-items-center rounded-full text-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 ${
        visible ? 'is-visible' : ''
      }`}
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
      <span className="scroll-progress-arrow" aria-hidden="true">↑</span>
    </IconButton>
  );
}

export default ScrollToTopButton;
