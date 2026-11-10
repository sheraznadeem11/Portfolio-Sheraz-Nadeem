import { useEffect, useState } from 'react';

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

export default Preloader;
