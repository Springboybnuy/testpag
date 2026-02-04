/* observar */
const elementos = document.querySelectorAll('.animar-scroll');

const observer = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('activo');
    }
  });
}, {
  threshold: 0.5
});

elementos.forEach((el) => observer.observe(el));

/* toggle nav */
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-principal');

toggle.addEventListener('click', () => {
  nav.classList.toggle('activo');
});
