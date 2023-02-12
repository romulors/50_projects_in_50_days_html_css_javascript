const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', () => {
    generateJoke();
})

generateJoke()

// o mesmo que abaixo, mas explicitando o modelo asincrono com async/await
async function generateJoke() {

    const config = { 
        headers : {'Accept' : 'application/json'}
    };

    const response = await fetch('https://icanhazdadjoke.com', config);
    const data = await response.json();
    jokeElement.innerHTML = data.joke;
}


// abaixo, usando promisses e os varios then's

// function generateJoke() {
//     const config = { 
//         headers : {'Accept' : 'application/json'}
//     };
//     fetch('https://icanhazdadjoke.com', config)
//         .then((response => response.json()))
//         .then((data) => {
//             jokeElement.innerHTML = data.joke;
//         });
// }