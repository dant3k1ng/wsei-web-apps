import { addNote, deleteNote, updateNote, getNotes } from './AppStorage';

export default class NotesHandling{

    static createNote(title: string, content: string){
        const note = {
            title: title,
            content: content
        }
        
        addNote(note);
    }

    static deleteNote(id: string){
        deleteNote(id);
    }

    static editNote(id: string, title: string, content: string){
        const note = {
            title: title,
            content: content
        }

        updateNote(id, note);
    }

    /*static getNote(id: string){
        getNote(id).then(res => console.log(res));
    }*/

    static getCollection(){
        getNotes();
    }

}