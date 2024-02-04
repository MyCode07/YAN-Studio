import { isMobile } from '../utils/isMobile.js';
import { lockPadding, unLockPadding } from '../utils/lockPadding.js';
import { gsap } from 'gsap'


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
        const dropDown = li.querySelector('.dropdown-menu');
        if (btn) {
            if (!isMobile.any()) {
                li.addEventListener('mouseenter', () => {
                    header.classList.add('_active')
                    li.classList.add('_active')

                    aniamteDropDown(dropDown, 'show')
                })

                li.addEventListener('mouseleave', () => {
                    header.classList.remove('_active')
                    li.classList.remove('_active')

                    aniamteDropDown(dropDown, 'hide')
                })
            }
            else {
                btn.addEventListener('click', () => {
                    li.classList.toggle('_active')

                    if (li.classList.contains('_active')) {
                        aniamteDropDown(dropDown, 'show')
                    }
                    else {
                        aniamteDropDown(dropDown, 'hide')
                    }

                    if (window.innerWidth > 1024) {
                        header.classList.toggle('_active')
                    }
                })
            }

        }
    })
}

function aniamteDropDown(dropDown, type = 'show') {
    if (dropDown && dropDown.closest('header')) {
        if (type == 'show') {
            gsap.to(dropDown, {
                height: 'auto',
            })

            gsap.to(dropDown.querySelectorAll('li'), {
                y: 0,
                stagger: 0.1
            })
        }
        else {
            gsap.to(dropDown, {
                height: 0,
            })

            gsap.to(dropDown.querySelectorAll('li'), {
                y: '20%',
                stagger: 0.1
            })
        }
    }
}