import IColor from '../interfaces/Color';
import INote from '../interfaces/Note';
import Color from './Color';

export default class Note implements INote {
    private _id = '';
    private _title = '';
    private _content = '';
    private _pinned = false;
    private _createdAt: number | null = null;
    private _color: IColor;

    constructor() {
        this._color = new Color();
        this.Color.HexColor = '#f2073a';
    }

    public get id() {
        return this._id;
    }
    
    public set id(id: string) {
        this._id = id;
    }

    public get title() {
        return this._title;
    }

    public set title(title: string) {
        this._title = title;
    }

    public get content() {
        return this._content;
    }

    public set content(content: string) {
        this._content = content;
    }

    public get pinned(): boolean {
        return this._pinned;
    }

    public set pinned(pinned: boolean) {
        this._pinned = pinned;
    }

    public get createdAt(): (number | null) {
        return this._createdAt;
    }

    public set createdAt(createdAt: (number | null)) {
        this._createdAt = createdAt;
    }

    public get Color(): IColor {
        return this._color;
    }

    public set Color(color: IColor) {
        this._color = color;
    }

}