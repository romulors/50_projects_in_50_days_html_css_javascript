const contents = document.querySelectorAll('.content');
const listItens = document.querySelectorAll('nav ul li');

listItens.forEach((item, index) => {
    item.addEventListener('click', () => {

        //limpa o que deve ser mostrado
        contents.forEach(content => content.classList.remove('show'));
        listItens.forEach(item => item.classList.remove('active'));

        //define o menu e o conteudo a ser ativo
        item.classList.add('active');
        contents[index].classList.add('show');
        
    })
})