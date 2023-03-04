const pokeContainer = document.getElementById('poke-container');
const POKEMON_COUNT = 150;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#F4E7DA',
    rock: '#D5D5D4',
    fairy: '#FCEAFF',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97B3E6',
    psychic: '#EAEDA1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

async function fetchPokemons() {
    for(let i = 1; i <= POKEMON_COUNT; i++) {
        await getPokemon(i);
    }
}

async function getPokemon(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    createPokemonCard(data);
}

function createPokemonCard(pokemonData) {
    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon');

    const name = pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1);
    const id = pokemonData.id.toString().padStart(3, '0');  
    const type = pokemonData.types[0].type.name;
    const color = colors[type];
    pokemonElement.style.backgroundColor = color;

    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png"" alt =""> 
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span></small>
    </div>
    `;

    pokemonElement.innerHTML = pokemonInnerHTML;
    pokeContainer.appendChild(pokemonElement);
}

fetchPokemons();