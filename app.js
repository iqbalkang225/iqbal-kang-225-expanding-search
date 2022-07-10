const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const overlay = document.querySelector('.overlay');

overlay.addEventListener('click', () => {
  input.classList.remove('active');
});

btn.addEventListener('click', () => {
  input.classList.toggle('active');
});
