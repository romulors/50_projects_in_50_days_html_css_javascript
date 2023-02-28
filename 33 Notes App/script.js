const addButton = document.getElementById('add');
addButton.addEventListener('click', () => addNewNote());

const notes = JSON.parse(localStorage.getItem('notes'));
if(notes) {
    notes.forEach(note =>addNewNote(note));
}

function addNewNote(text = "") {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class ="${text ? "hidden" : ""}" name="" id="" cols="30" rows="10"></textarea>`;

    const editButton = note.querySelector('.edit');
    const deleteButton = note.querySelector('.delete');
    const main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    textArea.innerHTML = text;
    main.innerHTML = marked.parse(text);

    deleteButton.addEventListener('click', () => {
        note.remove();
        updateLocalStorage();
    });

    editButton.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
        editButton.classList.toogle('editing');
    });

    textArea.addEventListener('input', (e) =>{
        const {value} = e.target;
        main.innerHTML = marked.parse(value);

        updateLocalStorage();
    })

    document.body.appendChild(note);
    updateLocalStorage();
}

function updateLocalStorage() {
    const notesText = document.querySelectorAll('textarea');
    const notes = [];
    notesText.forEach(note => notes.push(note.value));
    
    // Aceita apenas strings, entao vamo transformar em um JSON stringficado
    localStorage.setItem('notes', JSON.stringify(notes));
}