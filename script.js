const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('#nav-menu ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  hamburger.classList.toggle('active'); // হ্যামবার্গার X এনিমেশন
});

document.querySelectorAll(".lyrics-btn")
.forEach(button=>{

    button.addEventListener("click",()=>{

        const item =
        button.parentElement;

        item.classList.toggle("active");

    });

});