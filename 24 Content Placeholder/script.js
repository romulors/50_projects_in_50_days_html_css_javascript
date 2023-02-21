const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const author_name = document.getElementById('author_name');
const date = document.getElementById('date');

const animated_backgrouds = document.querySelectorAll('.animated-bg');
const animated_backgroud_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(() => {
    getData()
}, 2500);

function getData () {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1676907257273-ace57214b4d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="">';
    title.innerHTML = 'Lorem ipsum dolor sit amet.';
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quam in totam itaque neque ipsum, possimus expedita eos nostrum voluptatem.';
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">';
    author_name.innerHTML = 'John Doe';
    date.innerHTML = 'Fev 02, 2022';

    animated_backgrouds.forEach( (background) => {
        background.classList.remove('animated-bg');
    })

    animated_backgroud_texts.forEach( (background) => {
        background.classList.remove('animated-bg-texts');
    })
}