const insert = document.getElementById('insert');

//Captura o evento de apertar uma tecla no teclado
window.addEventListener('keydown', (keyboardEvent) => {

    //no html1 usamos um operador condicional (ternário) para colocar uma string informando se for tecla espaço
    const html1 = generateDiv(keyboardEvent.key === ' ' ? "'space'" : keyboardEvent.key, "event.key");
    const html2 = generateDiv(keyboardEvent.keyCode,"event.keyCode"); //Deprecated
    const html3 = generateDiv(keyboardEvent.code,"event.code");

    insert.innerHTML = `${html1}${html2}${html3}`;
});

function generateDiv (innerText, small_innerText) {
    return `<div class="key">${innerText}<small>${small_innerText}</small></div>`;
}