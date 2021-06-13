import Notes from "./Notes";

export default class Note{

    static downloadData() {
        const titleInput = <HTMLInputElement>document.getElementById('title');
        const contentInput = <HTMLInputElement>document.getElementById('content');
        
        const title = titleInput.value;
        const content = contentInput.value;

        if(!title || !content)
            alert('Please fill title and content');
        else
            this.addDataToNote(title, content);
    }

    static addDataToNote(NoteTitle: string, NoteContent: string) {
        const container = document.querySelector('.container');
        const noteDiv = document.createElement('div');
        
        noteDiv.setAttribute('class', 'noteDiv');
        container.appendChild(noteDiv);

        const noteTitle = document.createElement('h2');
        const noteContent = document.createElement('p');
        const editNote = document.createElement('div');
        const deleteNote = document.createElement('div');

        editNote.setAttribute('id', 'edit');
        deleteNote.setAttribute('id', 'delete');

        noteTitle.innerHTML = NoteTitle;
        noteContent.innerHTML = NoteContent;
        editNote.innerHTML = '<img src="./img/pencil.png">';
        deleteNote.innerHTML = '<img src="./img/delete.png">';

        noteDiv.appendChild(noteTitle);
        noteDiv.appendChild(noteContent);
        noteDiv.appendChild(editNote);
        noteDiv.appendChild(deleteNote);

        const editButton = <HTMLInputElement>document.getElementById('edit');
        editButton.addEventListener('click', (ev: Event) => Note.editNote());

        const deleteButton = <HTMLInputElement>document.getElementById('delete');
        deleteButton.addEventListener('click', (ev: Event) => Note.deleteNote());

        //Notes.createNote(NoteTitle, NoteContent);

        
    }

    static editNote(){
        console.log("editing")
    }

    static deleteNote(){
        console.log('deleting')
    }





}