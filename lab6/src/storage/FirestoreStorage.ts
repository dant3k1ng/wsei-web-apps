import db from '../instances/firebase';
import Note from '../entities/Note';
import NoteInterface, { IFirebaseNoteStorage } from '../interfaces/Note';
import Storage from '../interfaces/Storage';

export default class FirestoreStorage implements Storage {
    private db;

    constructor() {
        this.db = db;
    }

    private loadNote(note: IFirebaseNoteStorage, id: string) {
        let newNote = new Note();
        newNote.id = id;
        newNote.title = note.title;
        newNote.content = note.content;
        newNote.pinned = note.pinned;
        newNote.createdAt = note.createdAt;
        newNote.Color.HexColor = note.hex_color;

        return newNote;
    }

    private loadStorageNote(note: NoteInterface) {
        let attr: IFirebaseNoteStorage = {
            title: note.title,
            content: note.content,
            pinned: note.pinned,
            createdAt: note.createdAt,
            hex_color: note.Color.HexColor
        };

        return attr;
    }

    async save(note: NoteInterface) {
        try {
            const newNote = this.loadStorageNote(note);
            await this.db.collection('notes').add(newNote);
            return true;
        }
        catch (error) {
        }

        return false;
    }

    async update(note: NoteInterface) {
        try {
            await this.db.collection('notes').doc(note.id).update(this.loadStorageNote(note));
            return true;
        }
        catch (error) {
        }

        return false;
    }

    async delete(noteId: string) {
        try {
            await this.db.collection('notes').doc(noteId).delete();
            return true;
        }
        catch (error) {
        }

        return false;
    }

    async getAll() {
        let res: NoteInterface[] = [];
        
        try {
            res = await this.db.collection('notes').get().then(response => {
                
                const notes: NoteInterface[] = [];
                response.docs.forEach(data => {
                    const note = data.data() as IFirebaseNoteStorage;
                    notes.push(this.loadNote(note, data.id));
                });

                return notes;
            });
        }
        catch (error) {
        }

        return res;
    }
}