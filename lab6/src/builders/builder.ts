import NoteInterface from '../interfaces/Note';
import INoteControll from '../interfaces/NoteControllInterface';

export default class NoteBulder {
    private _note: NoteInterface;
    private _noteControll: INoteControll;

    constructor(note: NoteInterface, noteControll: INoteControll) {
        this._note = note;
        this._noteControll = noteControll;
    }

    generateElement() {
        const root = document.createElement("div");
        root.classList.add("note-container");
        root.style.backgroundColor = this._note.Color.HexColor;

        root.append(this.title());
        root.append(this.content());
        root.append(this.footer());

        return root;
    }

    private title() {
        const title = document.createElement("div");
        title.classList.add('title');

        const textTitle = document.createElement('span');
        textTitle.innerHTML = this._note.title;

        title.append(textTitle);

        return title;
    }

    private content() {
        const content = document.createElement('div');
        content.classList.add('content');

        const textContent = document.createElement('span');
        textContent.innerHTML = this._note.content;

        content.append(textContent);

        return content;
    }

    private footer() {
        const footer = document.createElement('div');
        footer.classList.add('footer');

        const deleteIcon = document.createElement('div');
        deleteIcon.innerHTML = '<img src="../img/delete.png">';
        deleteIcon.classList.add('icon');
        deleteIcon.addEventListener('click', () => {
            this._noteControll.deleteNote(this._note.id);
        });

        const pinIcon = document.createElement('div');
        pinIcon.innerHTML = '<img src="../img/pin.png">';
        pinIcon.classList.add('icon');
        pinIcon.addEventListener('click', () => {
            let note = this._note;
            note.pinned = !note.pinned;
            this._noteControll.updateNote(note);
        });

        footer.append(deleteIcon);
        footer.append(pinIcon);

        return footer;
    }
}