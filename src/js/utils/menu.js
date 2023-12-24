import gsap from 'gsap'

const dropdownButtons = document.querySelectorAll('.dropdown');
if (dropdownButtons.length) {
    dropdownButtons.forEach(dropdown => {
        const btn = dropdown.querySelector('.dropdown__btn');
        btn.addEventListener('click', () => {
            dropdown.classList.toggle('_active');
        })
    })
}

const openMenuBtn = document.querySelector('.menu__open-btn');
const menu = document.querySelector('.menu');
if (openMenuBtn) {
    openMenuBtn.addEventListener('click', () => {
        openMenuBtn.classList.toggle('_active');
        menu.classList.toggle('_active');
        document.body.classList.toggle('_noscroll');
    })
}




function menuHeight() {
    menu.style.height = window.innerHeight + 'px'
}

menuHeight()
window.addEventListener('resize', menuHeight);


const menuLinks = document.querySelectorAll('.menu li a');
if (menuLinks.length) {
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            openMenuBtn.classList.remove('_active');
            menu.classList.remove('_active');
            document.body.classList.remove('_noscroll');
        })
    })
}
