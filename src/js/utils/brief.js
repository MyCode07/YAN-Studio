const questionsImg = document.querySelectorAll('.question-img');
if (questionsImg.length) {
    questionsImg.forEach(question => {
        question.addEventListener('click', (e) => {
            console.log(e.target);
            e.preventDefault();

            let asnwer = question.closest('p').querySelector('.answer');
            asnwer.classList.toggle('_active')
        })
    })
}
