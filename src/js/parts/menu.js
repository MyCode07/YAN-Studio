import { lockPadding, unLockPadding } from '../utils/lockPadding.js';

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');


if (burger) {
    burger.addEventListener('click', (е) => {
        burger.classList.toggle('_active');
        menu.classList.toggle('_open');
        document.body.classList.toggle('_noscroll');


        // if (!header.classList.contains('_scrolled')) {
        //     header.classList.toggle('_sticky');
        // }

        if (menu.classList.contains('_open')) lockPadding();
        else unLockPadding();
    })
}



