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
