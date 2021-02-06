import { toggleAnswer } from './toggle';

const buttons = document.querySelectorAll('.card__button')
buttons.forEach(toggleAnswer);



const allbookmarks = document.querySelectorAll('.fa-bookmark')

allbookmarks.forEach((singlebookmark) => {
    singlebookmark.addEventListener('click', () => {
        singlebookmark.classList.toggle('far');
        singlebookmark.classList.toggle('fas');
    })
}
)
