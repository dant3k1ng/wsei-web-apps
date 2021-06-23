import App from '../App';
import firebaseConfig from '../firebaseConfig';
import Note from '../entities/Note';

describe('Configure App class', () => {
    let app = new App();

    it('Try storage from config file', () => {
        const type = app.getStorageType();
        expect(type).toEqual(firebaseConfig.storage);
    });
});

describe('Try custom type storage', () => {
    const custom = "custom_type";
    let app = new App(custom);

    it('Custom type storage', () => {
        expect(app.getStorageType()).toEqual(custom);
    });
});

describe('Try note method', () => {
    let app = new App('local');

    it('Creating note in local storage', async () => {
        const note = new Note();
        note.title = 'test';

        const res = await app.createNote(note);
        expect(res).toBe(true);
    });

    it('Counting notes in local storage', async () => {
        const notes = await app.getAllNotes();
        expect(notes.length).toBeGreaterThan(0);
    });

    it('Delete note', async () => {
        const notes = await app.getAllNotes();
        expect(notes.length).toBeGreaterThan(0);

        const note = notes[0];
        const res = await app.deleteNote(note.id);
        expect(res).toBe(true);
    })

});

