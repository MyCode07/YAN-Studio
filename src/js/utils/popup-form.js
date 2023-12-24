import { isMobile } from "./isMobile.js";

const popupForm = document.querySelector('.popup__form');
const popupClose = document.querySelector('.popup__form-close');
const popupFormOpen = document.querySelectorAll('.popup-open');



if (popupFormOpen.length) {
    popupFormOpen.forEach(popupOpen => {
        popupOpen.addEventListener('click', function (e) {
            e.preventDefault();
            popupForm.classList.add('_open');
            document.body.classList.add('_noscroll');

            if (!isMobile.any()) {
                lockPadding()
            }
        })

        popupClose.addEventListener('click', function () {
            popupForm.classList.remove('_open');
            document.body.classList.remove('_noscroll');

            if (!isMobile.any()) {
                unLockPadding()
            }
        })

        popupForm.addEventListener('click', function (e) {
            if (e.target.classList.contains('popup__form')) {
                popupForm.classList.remove('_open')
                document.body.classList.remove('_noscroll');
                unLockPadding()
            }
        })
    })
}


function lockPadding() {
    const paddingRight = 10;
    document.body.style.paddingRight = paddingRight + 'px';
}


function unLockPadding() {
    const paddingRight = 10;
    document.body.style.paddingRight = 0 + 'px';
}