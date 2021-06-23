import IColor from './Color';

export default interface INote {
    id: string;
    title: string;
    content: string;
    pinned: boolean;
    createdAt: (number | null);
    Color: IColor
}

export interface INoteStorage {
    id: string;
    title: string;
    content: string;
    pinned: boolean;
    createdAt: (number | null);
    hexColor: string;
}

export interface IFirebaseNoteStorage {
    title: string;
    content: string;
    pinned: boolean;
    createdAt: (number | null);
    hex_color: string;
}