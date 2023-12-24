import { gsap } from 'gsap';

const portfolioItem = document.querySelectorAll('.portfolio__item-info');

if (portfolioItem.length) {
    portfolioItem.forEach(info => {
        const btn = info.querySelector('.portfolio__item-name');
        const block = info.querySelector('.portfolio__item-descr');

        const timeline = gsap.timeline({ reversed: true, paused: true })
            .to(block, { height: 'auto' }
            )

        btn.addEventListener('click', function () {
            timeline.reversed() ? timeline.play() : timeline.reverse();
            this.classList.toggle('_active')
        })
    })
}