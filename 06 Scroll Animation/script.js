const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);
checkBoxes(); //calcula uma vez ao iniciar a janela a posição dos cards

// verifica quando que as caixas devem aparecer na tela
function checkBoxes() {
    const triggerBotton = 0.8 * window.innerHeight;

    boxes.forEach(box => {
        // retorna um DOMRect que descreve o tamanho e a posição do elemento
        // relativo ao viewport. Variaveis disponiveis:
        // x, y, width, height, top, right, botton, left
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBotton) {
            box.classList.add('show');
        } 
        else {
            box.classList.remove('show');
        }
    });
}