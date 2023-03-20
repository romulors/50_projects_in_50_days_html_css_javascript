const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');


const todos = JSON.parse(localStorage.getItem('todos'));

if(todos) {
	todos.forEach(todo => addTodo(todo));
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	addTodo();
});

function addTodo(todo) {
	let todoText = input.value;

	if(todo) {
		todoText = todo.Text;
	}

	if(todoText) {
		const todoElement = document.createElement('li');
		if(todo && todo.completed) {
			todoElement.classList.add('completed');
		}
		todoElement.innerText = todoText;
		setTodoElementBehaviour(todoElement);
		todosUL.appendChild(todoElement);
		input.value = "";

		updateLocalStorage();
	}
}

function setTodoElementBehaviour(todoElement) {
	todoElement.addEventListener('click', () => {
		todoElement.classList.toggle('completed')
		updateLocalStorage();
	});

	todoElement.addEventListener('contextmenu', (e) => {
		e.preventDefault();
		todoElement.remove();
		updateLocalStorage();
	});
}

function updateLocalStorage() {
	todosElements = document.querySelectorAll('li');

	const todos = [];

	todosElements.forEach(todoElement => {
		todos.push({
			text: todoElement.innerText,
			completed: todoElement.classList.contains('completed')
		})
	});

	localStorage.setItem('todos', JSON.stringify(todos));
}