const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendButton = document.getElementById('send');
const panel = document.querySelector('#panel');

let selectedRating = 'Satisfied';

sendButton.addEventListener('click', (e) => {
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
    `;
})

ratingsContainer.addEventListener('click', (e) => {
    // o div que contem o elemento clicado contem um rating?
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.nextElementSibling.innerHTML;
    }
    else if (e.target.classList.contains('rating')) {
        removeActive();
        e.target.classList.add('active');
        selectedRating = e.target.children[1].innerHTML;
        console.log(selectedRating);
    }
})

function removeActive () {
    for(let i=0; i < ratings.length; i++) {
        ratings[i].classList.remove('active');
    }
}