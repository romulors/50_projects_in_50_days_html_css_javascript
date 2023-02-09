const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

//adiciona e remote a classe show-nav para fazer a animação de rotação
open.addEventListener('click', () => container.classList.add('show-nav'));
close.addEventListener('click', () => container.classList.remove('show-nav'))