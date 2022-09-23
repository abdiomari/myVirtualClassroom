//change navbar styles on scroll

window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scroll > 0)
})


//show/hide question answer

const questions = document.querySelectorAll('.questions');

questions.forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('open');
    })
})