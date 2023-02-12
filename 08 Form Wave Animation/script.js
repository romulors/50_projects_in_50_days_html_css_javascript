const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText //atribui para dentro do html o resultado de
        .split('') //pegar cada uma das letras do label
        //e reescrever esta letra como um span com um delay de transição para cada letra
        .map( (letter,index) => `<span style="transition-delay: ${index * 15}ms">${letter}</span>`) 
        .join(''); //juntando novamente todas as reescritas
});