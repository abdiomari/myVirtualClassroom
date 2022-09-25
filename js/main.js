//change navbar styles on scroll

window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scroll > 0)
})


//show/hide question answer

const questions = document.querySelectorAll('.questions');
// const question1 = document.querySelectorAll('.question1');
// const question2 = document.querySelectorAll('.question1');
// const question3 = document.querySelectorAll('.question2');

questions.forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('open');
    })
})
// questions.forEach(question => {
//     question.addEventListener('click', () => {
//         question.classList.toggle('open');
//     })
// })
// questions.forEach(question => {
//     question.addEventListener('click', () => {
//         question.classList.toggle('open');
//     })
// })
// questions.forEach(question => {
//     question.addEventListener('click', () => {
//         question.classList.toggle('open');
//     })
// })