const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('#nav-menu ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});