const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const timeElement = document.querySelector('.time');
const dateElement = document.querySelector('.date');
const toggleElement = document.querySelector('.toggle');

const days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

toggleElement.addEventListener('click', (event) => {
    const html = document.querySelector('html');
    
    if(html.classList.contains('dark')) {
        html.classList.remove('dark');
        event.target.innerHTML = 'Dark Mode';
    } else {
        html.classList.add('dark');
        event.target.innerHTML = "Light Mode";
    }
})

function setTime () {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const hourForClock = hours % 12;
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const hoursAngle = scale(hourForClock, 0, 11, 0, 360);
    const minutesAngle = scale(minutes, 0, 59, 0, 360);
    const secondsAngle = scale(seconds, 0, 59, 0, 360);

    hourElement.style.transform = `translate(-50%, -100%) rotate(${hoursAngle}deg)`;
    minuteElement.style.transform = `translate(-50%, -100%) rotate(${minutesAngle}deg)`;
    secondElement.style.transform = `translate(-50%, -100%) rotate(${secondsAngle}deg)`;

    timeElement.innerHTML = `${hourForClock}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
    dateElement.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num -in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime();
setInterval(setTime, 200);