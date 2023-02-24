const textElement = document.getElementById('text');
const speedElement = document.getElementById('speed');
const text = "We Love Programming!";

let index = 1;
let speed = getSpeed();

writeText();

function writeText () {
    textElement.innerText = text.slice(0, index);

    index++;

    if(index > text.length) {
        index = 1;
    }

    setTimeout(writeText, speed);
}

speedElement.addEventListener('input', () => {
    speed = getSpeed();
});

function getSpeed() {
    return 300 / speedElement.value;
}