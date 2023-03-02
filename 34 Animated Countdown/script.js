const numbers_span = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.querySelector('#replay');

runAnimation();

function runAnimation() {
    numbers_span.forEach( (number, index) => {
        const nextToLast = numbers_span.length -1;

        number.addEventListener('animationend', (event) => {
            if(event.animationName === 'goInAnimation' && index != nextToLast) {
                number.classList.remove('in');
                number.classList.add('out');
            } else if (event.animationName === 'goOutAnimation' && number.nextElementSibling) {
                number.nextElementSibling.classList.add('in');
            }
            else {
                counter.classList.add('hide');
                finalMessage.classList.add('show');
            }
        })
    })
}

function resetDom() {
    counter.classList.remove('hide');
    finalMessage.classList.remove('show');

    numbers_span.forEach( (number) => {
        number.classList.value = '';
    })

    numbers_span[0].classList.add('in');
}

replay.addEventListener('click', () => {
    resetDom();
    runAnimation();
})