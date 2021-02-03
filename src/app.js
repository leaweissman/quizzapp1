const buttons = document.querySelectorAll('.card__button')
buttons.forEach(toggleAnswer);

function toggleAnswer(currywurst) {

    currywurst.addEventListener('click', () => {
        const answer = currywurst.parentNode.querySelector('.card__answer');
        answer.classList.toggle('hidden');

        currywurst.innerText = answer.classList.contains('hidden')
            ? 'Show Answer'
            : 'Hide Answer';
    });
}


/*const bookmarks = document.querySelectorAll('.bookmarksvg')
bookmarks.forEach(toggleBookmark);

function toogleBookmark(hotdog) {

    hotdog.addEventListener('click', () => {
        const bookmarkblack = hotdog.parentNode.querySelector('.clickedbookmark');
        bookmarkblack.classList.toggle('black')
    })
}*/


document.querySelector(".bookmark").getSVGDocument().getElementById("#clickedboomark").setAttribute("fill", "black")
