const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
 navMenu.querySelector('ul').classList.toggle('show');
});