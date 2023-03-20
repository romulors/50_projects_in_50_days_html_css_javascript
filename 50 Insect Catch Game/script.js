const screens = document.querySelectorAll('.screen');
const chooseInsectButton = document.querySelectorAll('.choose-insect-btn');
const startButton = document.getElementById('start-btn');

const gameContainer = document.getElementById('game-container');
const timeElement = document.getElementById('time');
const scoreElement = document.getElementById('score');
const message = document.getElementById('message');

let seconds = 0;
let score = 0;
let selectedInsect = {};

startButton.addEventListener('click', () => screens[0].classList.add('up'));

chooseInsectButton.forEach(button => button.addEventListener('click', () => {
	const image = button.querySelector('img');
	const src = image.getAttribute('src');
	const alt = image.getAttribute('alt');
	selectedInsect = {src, alt};
	screens[1].classList.add('up');
	setTimeout(createInsect, 1000);
	startGame();
}));

function startGame() {
	setInterval(increaseTime, 1000);
}

function increaseTime() {
	let min = Math.floor(seconds/60);
	let sec = seconds % 60;

	 min = min < 10 ? `0${min} ` : min;
	 sec = sec < 10 ? `0${sec} ` : sec;

	 timeElement.innerHTML = `Time: ${min}:${sec}`;
	 seconds++;
}

function createInsect() {
	// <div class="insect">
	// 	<img src="https://pngimg.com/uploads/fly/fly_PNG3957.png" alt="">
	// </div>
	const insect = document.createElement('div');
	insect.classList.add('insect');
	const {x , y} = getRandomLocation();
	insect.style.top = `${y}px`;
	insect.style.left = `${x}px`;
	insect.innerHTML = `<img src="${selectedInsect.src}" alt="${selectedInsect.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`;

	insect.addEventListener('click', catchInsect);

	gameContainer.appendChild(insect);
}

function getRandomLocation() {
	const width = window.innerWidth;
	const height = window.innerHeight;
	const x = Math.random() * (width - 200) + 100;
	const y = Math.random() * (height - 200) + 100;
	return {x, y};
}

function catchInsect() {
	increaseScore();
	// o proximo this refere-se ao inseto clicado
	this.classList.add('caught');
	setTimeout(() => this.remove(), 2000);
	addInsects();
}

function addInsects() {
	setTimeout(createInsect, 1000);
	setTimeout(createInsect, 1000 + Math.random() * 1000);
}

function increaseScore() {
	score++;
	if(score == 19) {
		message.classList.add('visible');
	}
	scoreElement.innerHTML = `Score: ${score}`;
}