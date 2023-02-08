const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;

    if(currentActive > circles.length) {
        currentActive = circles.length;
    }

    //Atualiza o visual
    update();
})

prev.addEventListener('click', () => {
    currentActive--;

    if(currentActive < 1) {
        currentActive = 1;
    }

    update();
})

function update() {
    //Vamos ajustar quais circulos estão ativos usando classes
    circles.forEach((circle, index) => {
        if(index < currentActive) {
            circle.classList.add('active');
        }
        else
        {
            circle.classList.remove('active');
        }
    })

    //Contaremos quantas barras intermediárias estarão ativas
    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length-1) / (circles.length-1)*100 + '%';

    //Habilita ou desabilita os botoes Prev e Next
    if (currentActive === 1) {
        prev.disabled = true;
    }
    else if (currentActive === circles.length) {
        next.disabled = true;
    }
    else {
        prev.disabled = false;
        next.disabled = false;
    }
}