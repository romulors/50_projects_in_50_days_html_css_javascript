const API_KEY = 'c1cf00c3c51dc12566f036f853244ae3';
const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=c1cf00c3c51dc12566f036f853244ae3&page=1';
const IMAG_PATH = 'https://image.tmdb.org/t/p//w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=c1cf00c3c51dc12566f036f853244ae3&query="';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// Get initial movies
getMovies(API_URL);

async function getMovies(url) {
    const response = await fetch(url);
    const data = await response.json();

    showMovies(data.results);
}

function showMovies(movies) {
    main.innerHTML = '';

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie;

        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        //Refatorar
        movieElement.innerHTML =
        ` <img src="${IMAG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${overview}`;

        main.appendChild(movieElement);
    })
}

function getClassByRate(vote) {
    if(vote >= 8) return 'green';
    else if(vote>=5) return 'orange';
    else return 'red';
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const searchTerm = search.value;

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm);
        search.value = '';
    } else {
        window.location.reload();
    }
})