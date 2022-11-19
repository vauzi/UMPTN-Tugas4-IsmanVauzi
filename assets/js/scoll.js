const nav = document.getElementById('nav-link');

function toggle() {
  nav.classList.toggle('translate-x-44');
  nav.classList.toggle('opacity-0');
}

window.addEventListener('scroll', () => {
  var nav = document.querySelectorAll('.navbar');

  for (var i = 0; i < nav.length; i++) {
    if (window.scrollY > 0) {
      nav[i].classList.remove('lg:bg-transparent');
      nav[i].classList.add('px-7');
    } else {
      nav[i].classList.remove('px-7');
      nav[i].classList.add('lg:bg-transparent');
    }
  }
});
