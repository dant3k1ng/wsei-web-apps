import INote from './Note';

export default interface INoteControll {
    createNote(note: INote): Promise<boolean>;
    updateNote(note: INote): Promise<boolean>;
    deleteNote(noteId: string): Promise<boolean>;
}