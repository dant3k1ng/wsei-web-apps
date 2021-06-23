import NoteInterface from '../interfaces/Note';
import INoteControll from '../interfaces/NoteControllInterface';
import NoteBuilder from './../builders/builder';

export default class Notes {
    private _notes: NoteInterface[] = [];
    private _noteControll: INoteControll;

    public pinnedNoteContainer: HTMLElement | null = null;
    public notpinnedNoteContainer: HTMLElement | null = null;

    constructor(notes: NoteInterface[], noteControll: INoteControll) {
        this._notes = notes;
        this._noteControll = noteControll;

        this.pinnedNoteContainer = <HTMLElement>document.getElementById('pinned-notes-container');
        this.notpinnedNoteContainer = <HTMLElement>document.getElementById('not-pinned-notes-container');
    }

    public render() {
        if(this.pinnedNoteContainer !== null) {
            this.pinnedNoteContainer.innerHTML = '';
        } 

        if(this.notpinnedNoteContainer !== null) {
            this.notpinnedNoteContainer.innerHTML = '';
        }

        if(this.pinnedNoteContainer !== null && this.notpinnedNoteContainer !== null) {

            this._notes.forEach(note => {
                let noteBuilder = new NoteBuilder(note, this._noteControll);

                if(note.pinned){
                    this.pinnedNoteContainer?.append(noteBuilder.generateElement())
                }
                else{
                    this.notpinnedNoteContainer?.append(noteBuilder.generateElement())
                }
            });
        }
    }
}