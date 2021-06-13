import './style.scss';
import Note from './Note'
import NotesHandling from './Notes';


export class App {
    constructor(){
        this.downloadExistingNotes();
        this.addButton();
    }

    addButton() {
        const addButton = <HTMLInputElement>document.getElementById('add');
        addButton.addEventListener('click', (ev: Event) => Note.downloadData());
    }

    downloadExistingNotes(){
        NotesHandling.getCollection();
    }
}

