const root = document.querySelector(':root');
const button = document.getElementById('btn');
const boxes = document.getElementById('boxes');

const SIZE_X = 500;
const SIZE_Y = 500;

//funciona de 1 a 9
const NUMBER_ROWS = 4;
const NUMBER_COLLUMNS = 4;

setInitialCSS();
createBoxes();

button.addEventListener('click', () => boxes.classList.toggle('big'));

function setInitialCSS() {
    root.style.setProperty('--boxWidth', `${SIZE_X/NUMBER_COLLUMNS}px`);
    root.style.setProperty('--boxHeight', `${SIZE_Y/NUMBER_ROWS}px`);
    root.style.setProperty('--boxesWidth', `${SIZE_X}px`);
    root.style.setProperty('--boxesHeight', `${SIZE_Y}px`);
}

function createBoxes() {
    for(let i = 0; i<NUMBER_COLLUMNS; i++) {
        for(let j=0; j<NUMBER_ROWS; j++) {
            const boxElement = document.createElement('div');
            boxElement.classList.add('box');
            boxElement.style = `background-position: -${j * SIZE_X/NUMBER_COLLUMNS}px -${i * SIZE_Y/NUMBER_ROWS}px`
            boxes.appendChild(boxElement);            
        }
    }
}