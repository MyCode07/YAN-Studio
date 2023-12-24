const empty = document.querySelector('.empty');
function emptyHeight(){
    if (empty) {
        const headerheight = document.querySelector('.header').getBoundingClientRect().height;
        const footerheight = document.querySelector('.footer').getBoundingClientRect().height;
        empty.style.minHeight = window.innerHeight - headerheight - footerheight + 'px';
    }
}

emptyHeight();
window.addEventListener('resize', emptyHeight);