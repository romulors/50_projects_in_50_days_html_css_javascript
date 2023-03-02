const imageContainer = document.getElementById('images');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

const images = document.querySelectorAll('#images img');
let index = 0;

let interval = setInterval(askNewImage, 2000);

function askNewImage() {
    index++;
    changeImage();
}

function changeImage() {
    if (index > images.length - 1) {
        index = 0;
    }else if(index <0) {
        index = images.length - 1;
    }
    
    imageContainer.style.transform = `translateX(${-index * 500}px)`
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(askNewImage, 2000);
}

rightButton.addEventListener('click', () => {
    index++;
    changeImage();
    resetInterval();
})

leftButton.addEventListener('click', () => {
    index--;
    changeImage();
    resetInterval();
})