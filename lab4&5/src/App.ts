import Notes from './controlls/Notes';
import FirestoreStorage from './storage/FirestoreStorage';
import AppStorage from './storage/FirestoreStorage';
import firebaseConfig from './firebaseConfig';
import CreateNote from './controlls/CreateNote';
import INoteControll from './interfaces/NoteControllInterface';
import NoteInterface from './interfaces/Note';
import StorageInterface from './interfaces/Storage';


export default class App implements INoteControll {

    private _storageType = "";

    noteCreator: CreateNote;
    concrete: StorageInterface;

    constructor(storageType = "") {

        if (storageType !== "") {
            this._storageType = storageType;
        }

        this.noteCreator = new CreateNote(this);
        this.concrete = this.getStorageService();
    }


    public getStorageType(): string
    {
        if(this._storageType !== "") {
            return this._storageType;
        }

        return firebaseConfig.storage;
    }

    public getStorageService(): StorageInterface {

        const type = this.getStorageType();

        if (type === "firebase") return new FirestoreStorage();
        return new AppStorage();
    }

    public async createNote(note: NoteInterface) {
        let res = await this.concrete.save(note);

        if(res){
            this.renderNotes()
        }

        return res;
    }

    public async updateNote(note: NoteInterface) {
        let res = await this.concrete.update(note);

        if(res){
            this.renderNotes();
        }

        return res;
    }

    public async deleteNote(noteId: string) {
        let res = await this.concrete.delete(noteId);

        if(res){
            this.renderNotes();
        }

        return res;
    }

    public async getAllNotes() {
        return await this.concrete.getAll();
    }

    public async renderNotes() {
        const notes = new Notes(await this.getAllNotes(), this);
        notes.render();
    }
    
}
