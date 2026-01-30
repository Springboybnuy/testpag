/*  */
const encabezado = document.querySelector('.encabezado-sitio');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    encabezado.classList.add('fijo');
  } else {
    encabezado.classList.remove('fijo');
  }
});


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
