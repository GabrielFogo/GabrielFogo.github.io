const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    nav.style.boxShadow= '1px 2px 3px #0C4160';
  } else {
    nav.style.boxShadow= '';
  }
});