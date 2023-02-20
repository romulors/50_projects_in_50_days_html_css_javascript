const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const sizeButton = document.getElementById('size');
const colorButton = document.getElementById('color');
const clearButton = document.getElementById('clear');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let size = 10;
let isPressed = false;
let color = 'black';
let x;
let y;

canvas.addEventListener('mousedown', (event) => {
    isPressed = true;
    x = event.offsetX;
    y = event.offsetY;
})

canvas.addEventListener('mouseup', (event) => {
    isPressed = false;
    x = undefined;
    y = undefined;
})

canvas.addEventListener('mousemove', (event) => {
    if(isPressed) {
        const x2 = event.offsetX;
        const y2 = event.offsetY;

        drawCircle(x2,y2);
        drawLine(x,y,x2,y2);

        x = x2;
        y = y2;
    }
})

function drawCircle(x,y) {
    context.beginPath();
    context.arc(x,y,size, 0, Math.PI * 2);
    context.fillStyle = color;
    context.fill();
}

function drawLine(x1,y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.strokeStyle = color;
    context.lineWidth = size * 2;
    context.stroke();
}

increaseButton.addEventListener('click', (event) => {
    size++;

    if(size >50) {
        size = 50;
    }

    sizeButton.innerText = size;
})

decreaseButton.addEventListener('click', (event) => {
    size--;

    if(size < 1) {
        size = 1;
    }

    sizeButton.innerText = size;
})

colorButton.addEventListener('change', (event) => {color = event.target.value});

clearButton.addEventListener('click', () => {
    context.clearRect(0,0,canvas.width, canvas.height);
})