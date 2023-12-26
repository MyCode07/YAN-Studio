
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'
import { TextPlugin } from 'gsap/TextPlugin.js';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animate(entry.target);
            animateLogo(entry.target)
        }
    })
});


function animate(elem) {
    const delay = elem.dataset.delay ? elem.dataset.delay * 1000 : 0

    if (elem.hasAttribute('data-animate-left')) {
        setTimeout(() => {
            elem.removeAttribute('data-animate-left');
        }, delay);
    }
    if (elem.hasAttribute('data-animate-right')) {
        setTimeout(() => {
            elem.removeAttribute('data-animate-right');
        }, delay);
    }
    if (elem.hasAttribute('data-animate-top')) {
        setTimeout(() => {
            elem.removeAttribute('data-animate-top');
        }, delay);
    }
    if (elem.hasAttribute('data-animate-bottom')) {
        setTimeout(() => {
            elem.removeAttribute('data-animate-bottom');
        }, delay);
    }
    if (elem.hasAttribute('data-animate-opacity')) {
        setTimeout(() => {
            elem.removeAttribute('data-animate-opacity');
        }, delay);
    }
}

const animateElems = document.querySelectorAll('[data-animate]');
export const animateAction = () => {
    if (!animateElems.length) return;

    animateElems.forEach(elem => {
        observer.observe(elem);
    })
}

// stagger animations
const observerStagger = new IntersectionObserver((entries, self) => {
    let targets = entries
        .map(entry => {
            if (entry.isIntersecting) {
                self.unobserve(entry.target)
                return entry.target;
            }
        })
        .filter(item => item != undefined);

    animateStagger(targets)
});

function animateStagger(elem) {
    if (elem) {
        gsap.to(elem, {
            opacity: 1,
            duration: 0.3,
            x: 0,
            y: 0,
            ease: 'ease',
            stagger: 0.2
        });
    }
}

const animateElemsStagger = document.querySelectorAll('[data-animate-stagger]');
export const animateStaggerAction = () => {
    if (!animateElemsStagger.length) return
    animateElemsStagger.forEach(elem => {
        observerStagger.observe(elem);

    })
}


function animateLogo(logo) {
    const paths = logo.querySelectorAll('path');
    if (!paths.length) return;

    gsap.to(paths, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.1,
        ease: 'ease'
    });
}

const footerLogo = document.querySelector('.footer__logo svg');
observer.observe(footerLogo);





export const aniamteTrigger = () => {
    const advantagesLines = gsap.utils.toArray(".right .text-wrap li");
    console.log(advantagesLines);
    if (advantagesLines.length) {
        const line = document.querySelector('.line span');
        const list = document.querySelector('.right .text-wrap li');
        const wrap = document.querySelector('.right .text-wrap');
        const smallTimeline = gsap.timeline();
        const listHeight = list.getBoundingClientRect().height;
        const wrapHeight = wrap.getBoundingClientRect().height;
        const deltaHeight = listHeight - wrapHeight

        console.log('deltaHeight ' + deltaHeight);
        ScrollTrigger.create({
            trigger: '.advantages',
            start: "top -20%",
            end: `+=${listHeight}`,
            scrub: 0.75,
            markers: true,
            pin: true,
            animation: smallTimeline,
            onUpdate: self => {
                line.style.width = self.progress * 100 + '%';
                // gsap.to(list, {
                //     y: self.progress * -deltaHeight + self.progress * -168,
                // })
            }
        })

    }
}