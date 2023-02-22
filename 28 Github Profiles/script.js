const API_URL = 'https://api.github.com/users/';

const NUMBER_REPOS = 5;
const form = document.getElementById('form');
const main = document.getElementById('main');
const search = document.getElementById('search');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const user = search.value;

    if(user) {
        getUser(user);
        search.value = '';
    }
})

async function getUser(username) {
    try {
        const {data} = await axios(API_URL + username);
        createUserCard(data);
        getRepos(username);
    } catch(error) {
        if(error.response.status == 404){
            createErrorCard('No profile with this username');
        }
    }
}

async function getRepos(username) {
    try {
        const {data} = await axios(API_URL + username + '/repos?sort=created');
        addReposToCard(data);
    } catch(error) {
        createErrorCard('Problem fetching repos');
    }
}

function createUserCard (user_data) {
    const cardHTML = `
    <div class="card">
        <div>
            <img src="${user_data.avatar_url}" alt="${user_data.name}" class="avatar">
        </div>

        <div class="user-info">
            <h2>${user_data.name}</h2>
            <p>${user_data.bio ? user_data.bio : 'Github User'}</p>

            <ul>
                <li>${user_data.followers} <strong>Followers</strong></li>
                <li>${user_data.following} <strong>Following</strong></li>
                <li>${user_data.public_repos} <strong>Repos</strong></li>
            </ul>

            <div id="repos">
                
            </div>
        </div>
    </div>`;

    main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
    const reposElements = document.getElementById('repos');

    repos.slice(0,NUMBER_REPOS).forEach(repo => {
        const repoEl = document.createElement('a');
        repoEl.classList.add('repo');
        repoEl.href = repo.html_url;
        repoEl.target = '_blank'; //abre em nova janela
        repoEl.innerHTML = repo.name;

        reposElements.appendChild(repoEl);
    })
}

function createErrorCard(message) {
    const cardHTML = `
    <div class="card">
        <h1>${message}</h1>
    </div>`;

    main.innerHTML = cardHTML;
}