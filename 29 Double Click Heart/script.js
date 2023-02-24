const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

const DOUBLE_CLICK_DURATION = 500; //tempo em ms
let clickTime = 0;

loveMe.addEventListener('click' , (event) => {
    if(event.timeStamp - clickTime < DOUBLE_CLICK_DURATION)
    {
        clickTime = 0;
        times.textContent++;
        createHeartElement(event);   
    }
    else{
        clickTime = event.timeStamp;
    }
    
    
});

function createHeartElement(event) {
    const heartElement = document.createElement('i');
    heartElement.classList.add("fas");
    heartElement.classList.add("fa-heart");

    const x = event.clientX;
    const y = event.clientY;

    const leftOffset = event.target.offsetLeft;
    const topOffset = event.target.offsetTop;

    const xInside = x - leftOffset;
    const yInside = y - topOffset;

    heartElement.style.left = `${xInside}px`;
    heartElement.style.top = `${yInside}px`;

    loveMe.appendChild(heartElement);
    setTimeout( () => {
        loveMe.removeChild(heartElement);
    }, DOUBLE_CLICK_DURATION);
}