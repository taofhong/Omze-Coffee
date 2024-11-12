// Script para mantener el menú fijo con fondo al hacer scroll
window.addEventListener('scroll', function() {
  var nav = document.querySelector('nav');
  if (window.scrollY > 0) {
      nav.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
  } else {
      nav.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  }
});
