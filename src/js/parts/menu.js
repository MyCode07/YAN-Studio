import { lockPadding, unLockPadding } from '../utils/lockPadding.js';

const burger = document.querySelector('.header__burger');
const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const contactLink = document.querySelector('._contacts');


if (burger) {
    burger.addEventListener('click', (e) => {
        burger.classList.toggle('_active');
        header.classList.toggle('_active');
        menu.classList.toggle('_open');
        document.body.classList.toggle('_noscroll');
        if (menu.classList.contains('_open')) lockPadding();
        else unLockPadding();


    })

    contactLink.addEventListener('click', (e) => {
        if (menu.classList.contains('_open') && contactLink) {
            lockPadding();
            burger.classList.remove('_active');
            header.classList.remove('_active');
            menu.classList.remove('_open');
            document.body.classList.remove('_noscroll');
        }
        else unLockPadding();
    })
}



