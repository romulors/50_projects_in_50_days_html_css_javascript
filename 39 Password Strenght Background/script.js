const password = document.getElementById('password')
const background = document.getElementById('background');

const MAX_BLUR = 20;

password.addEventListener('input', (e) => {
    const input = e.target.value;
    const length = input.length;

    //faz alguma validação... e após a validação...

    let blur = MAX_BLUR - length * 2;
    if(blur<0) blur=0;
    background.style.filter = `blur(${blur}px)`;
})