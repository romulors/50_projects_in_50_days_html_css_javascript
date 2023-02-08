//Seleciona todos os paneis em um NodeList
const panels = document.querySelectorAll('.panel');

//Adiciona um evento de click em cada painel, onde verifica
//se o painel possui a classe active. Se tiver, remove ela
//se não possuir, adiciona a classe ao painel
panels.forEach( (panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
} );

//Remove de todos os paineis a classe 'active' 
function removeActiveClasses() {
    panels.forEach( (panel) => {
        panel.classList.remove('active');
    })
}