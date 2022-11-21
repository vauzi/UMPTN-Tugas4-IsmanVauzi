const nav = document.getElementById('nav-link');
const navi = document.getElementById('navbar');

function toggle() {
  //   nav.classList.toggle('translate-x-44');
  nav.classList.toggle('opacity-0');
  navi.classList.toggle('bg-gray-600');
}

window.addEventListener('scroll', () => {
  var nav = document.querySelectorAll('.navbar');

  for (var i = 0; i < nav.length; i++) {
    if (window.scrollY > 100) {
      nav[i].classList.add('bg-gray-600');
      nav[i].classList.add('px-5');
    } else {
      nav[i].classList.remove('bg-gray-600');
      nav[i].classList.remove('px-5');
    }
  }
});
