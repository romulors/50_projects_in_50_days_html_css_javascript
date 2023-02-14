const tagsElements = document.getElementById('tags');
const textArea = document.getElementById('textarea');

const blinkCount = 30;
const highlightDuration = 100

textArea.focus();

//ao soltar uma tecla no teclado, cria as tags e inicia animação piscando as tags
textArea.addEventListener('keyup', (event) => {
    createTags(event.target.value);

    if(event.key === 'Enter') {
        setTimeout( () => {
            event.target.value = '';
        }, 10);

        startHighlightAnimation();
    }
});

//cria a lista de tags a partir das entradas na textarea
function createTags(input) {
    tagsElements.innerHTML = '';

    //vamos pegar o input, remover os espaços nas palavras, e remover as entradas que são espaços
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    
    //para cada tag, cria um span com seu innerText, adicionando a classe tag e guardando no array tagsElements
    tags.forEach( tag => {
        const tagElement = document.createElement('span');
        tagElement.classList.add('tag');
        tagElement.innerText = tag;
        tagsElements.appendChild(tagElement);
    });
}


//seleciona uma tag aleatoriamente
function pickRandomTag () {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

//faz uma tag ficar em highlight
function highlightTag (tag) {
    tag.classList.add('highlight');
}

//remove o highlight da tag
function unHighlightTag (tag) {
    tag.classList.remove('highlight');
}

//faz piscar aleatoriamente todas as tags
function startHighlightAnimation() {

    //define um intervalo de tempo e faz varias tags piscar durante este tempo
    const interval = setInterval( () => {
        temporaryHighlightOneRandomTag();
    }, highlightDuration);

    //apos um tempo, finaliza o setTnterval e escolhe uma tag aleatoria para marcar
    setTimeout(() => {
        clearInterval(interval);
        const randomTag = pickRandomTag();
        highlightTag(randomTag);
    }, blinkCount * highlightDuration);
}

//realiza uma piscada na tag
function temporaryHighlightOneRandomTag() {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout( () => {
        unHighlightTag(randomTag);
    }, highlightDuration)
}