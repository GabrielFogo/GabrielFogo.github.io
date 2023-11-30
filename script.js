const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.style.boxShadow= '1px 2px 3px #0C4160';
  } else {
    header.style.boxShadow= '';
  }
});
