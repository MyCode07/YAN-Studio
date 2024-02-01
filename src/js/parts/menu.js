import { isMobile } from '../utils/isMobile.js';
import { lockPadding, unLockPadding } from '../utils/lockPadding.js';

const burger = document.querySelector('.header__burger');
const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const allMenuLinks = document.querySelectorAll('ul li a');

if (burger) {
    burger.addEventListener('click', (e) => {
        burger.classList.toggle('_active');
        header.classList.toggle('_active');
        menu.classList.toggle('_open');
        document.body.classList.toggle('_noscroll');

        if (menu.classList.contains('_open')) {
            lockPadding();
        }
        else {
            unLockPadding();
        }
    })
}

if (allMenuLinks.length) {
    allMenuLinks.forEach(link => {

        link.addEventListener('click', (e) => {
            if (menu.classList.contains('_open')) {
                unLockPadding();
                burger.classList.remove('_active');
                header.classList.remove('_active');
                menu.classList.remove('_open');
                document.body.classList.remove('_noscroll');
            }
        })

        const li = link.closest('li');
        const btn = li.querySelector('button');
        if (btn) {
            if (!isMobile.any()) {
                li.addEventListener('mouseenter', () => {
                    header.classList.add('_active')
                    li.classList.add('_active')
                })

                li.addEventListener('mouseleave', () => {
                    header.classList.remove('_active')
                    li.classList.remove('_active')
                })
            }
            else {
                btn.addEventListener('click', () => {
                    li.classList.toggle('_active')

                    if (window.innerWidth > 1024) {
                        header.classList.toggle('_active')
                    }
                })
            }

        }
    })
}