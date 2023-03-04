const container = document.getElementById("container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

const SQUARES = 500;

for (let i=0; i< SQUARES; i++) {
    const squareElement = document.createElement('div');
    squareElement.classList.add('square');

    squareElement.addEventListener('mouseover', () => setColor(squareElement));
    squareElement.addEventListener('mouseout', () => removeColor(squareElement));

    container.appendChild(squareElement);
}

function setColor(squareElement) {
    const color = getRandomColor();
    squareElement.style.background = color;
    squareElement.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(squareElement) {
    squareElement.style.background = '#1d1d1d';
    squareElement.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}