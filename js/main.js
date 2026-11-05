const preloader = document.querySelector('.preloader');
const loaderTitle = document.querySelector('.preloader-title');
const nameTarget = document.querySelector('[data-name]');

const loaderNames = ['IRFAN MALIK', 'SHERAZ NADEEM'];
let index = 0;

setTimeout(() => {
  const interval = setInterval(() => {
    index = (index + 1) % loaderNames.length;
    loaderTitle.textContent = loaderNames[index];
  }, 550);

  setTimeout(() => {
    clearInterval(interval);
    preloader.classList.add('hidden');
    if (nameTarget) nameTarget.textContent = 'SHERAZ NADEEM';
  }, 1800);
}, 300);

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
