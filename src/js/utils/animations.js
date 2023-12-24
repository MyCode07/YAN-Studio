import gsap from 'gsap'

let threshold = 0.2
if (window.innerWidth <= 768) {
    threshold = 0.1
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animate(entry.target);

            if (!entry.target.closest('.menu')) {
                observer.unobserve(entry.target);
            }
        }
    })
}, { threshold: threshold });

const animateElems = document.querySelectorAll('[data-animate]');
if (animateElems.length) {
    animateElems.forEach(elem => {
        observer.observe(elem);
    })
}


function animate(elem) {
    if (elem) {
        if (elem.hasAttribute('data-opacity-only')) {
            gsap.to(elem, {
                opacity: 1,
                duration: 1,
                delay: +elem.dataset.delay ? +elem.dataset.delay : 0,
                ease: 'ease'
            });
        }
        else {
            gsap.to(elem, {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 1,
                delay: +elem.dataset.delay ? +elem.dataset.delay : 0,
                ease: 'ease'
            });
        }
    }
}
