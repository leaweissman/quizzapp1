import { toggleAnswer } from './toggle';

const buttons = document.querySelectorAll('.card__button')
buttons.forEach(toggleAnswer);



const bookmarks = document.querySelector('.bookmark__saved')

function bookmarks(currywurst) {

    currywurst.addEventListener('click', () => {
        const bookmark = currywurst.parentNode.querySelector('.bookmark__saved');
        answer.classList.toggle('fas');
        answer.classList.toggle('far');

    });
}