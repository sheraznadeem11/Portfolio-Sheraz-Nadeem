import { useEffect } from 'react';

function useCopyProtection() {
  useEffect(() => {
    const allowFormInteraction = (target) =>
      target instanceof Element &&
      target.closest('input, textarea, select, [contenteditable="true"]');
    const preventCopy = (event) => {
      if (!allowFormInteraction(event.target)) event.preventDefault();
    };

    document.addEventListener('copy', preventCopy);
    document.addEventListener('cut', preventCopy);
    document.addEventListener('contextmenu', preventCopy);
    document.addEventListener('dragstart', preventCopy);

    return () => {
      document.removeEventListener('copy', preventCopy);
      document.removeEventListener('cut', preventCopy);
      document.removeEventListener('contextmenu', preventCopy);
      document.removeEventListener('dragstart', preventCopy);
    };
  }, []);
}

export default useCopyProtection;
