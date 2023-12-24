const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('_active');
    menu.classList.toggle('_open');
})