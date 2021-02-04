
function toggleAnswer(currywurst) {

    currywurst.addEventListener('click', () => {
        const answer = currywurst.parentNode.querySelector('.card__answer');
        answer.classList.toggle('hidden');

        currywurst.innerText = answer.classList.contains('hidden')
            ? 'Show Answer'
            : 'Hide Answer';
    });
}

export { toggleAnswer }