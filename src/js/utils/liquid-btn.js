import { gsap } from "gsap";
import { isMobile } from "./isMobile.js";

const liquidBtns = document.querySelectorAll('._button-liquid');
if (liquidBtns.length && !isMobile.any()) {
    let timeline = gsap.timeline();
    liquidBtns.forEach(btn => {
        const span = btn.querySelector('span');

        btn.addEventListener('mouseenter', function (e) {
            btn.classList.add('_active')
            if (btn.classList.contains('_active')) {
                timeline.fromTo(this.querySelector('.fill'),
                    {
                        y: '+76%',
                    },
                    {
                        y: 0,
                        duration: 0.7,
                    }
                )
            }

        })

        const coeff = 10;
        btn.addEventListener('mousemove', function (e) {
            const left = btn.getBoundingClientRect().left
            const top = btn.getBoundingClientRect().top
            const width = btn.getBoundingClientRect().width
            const height = btn.getBoundingClientRect().height
            const mouseLeft = e.clientX
            const mouseTop = e.clientY

            const centerLeft = left + width / 2
            const centerTop = top + height / 2

            const moveX = (mouseLeft - centerLeft) / coeff
            const moveY = (mouseTop - centerTop) / coeff

            gsap.to(btn, {
                y: moveY,
                x: moveX
            })

            gsap.to(span, {
                y: moveY,
                x: moveX,
                perspective: 200
            })
        })

        btn.addEventListener('mouseleave', function (e) {
            btn.classList.remove('_active')
            if (!btn.classList.contains('_active')) {
                timeline.to(this.querySelector('.fill'), {
                    y: '-76%',
                    duration: 0.5,
                })
            }

            gsap.to(btn, {
                y: 0,
                x: 0,
            })
            gsap.to(span, {
                y: 0,
                x: 0,
                perspective: 0
            })
        })
    })
}
