import Note from '../entities/Note';
import INoteControll from '../interfaces/NoteControllInterface';

export default class CreateNote {
    private _note: Note;
    private _noteControll: INoteControll;
    private _defaultColor = ''; 

    public set title(title: string) {
        this._note.title = title;

        if(this.noteTitleInput !== null) {
            this.noteTitleInput.value = title;
        }
    }

    public set content(content: string) {
        this._note.content = content;

        if(this.noteContentInput !== null) {
            this.noteContentInput.value = content;
        }
    }

    public selfContainer: HTMLElement | null = null;
    public noteTitleInput: HTMLInputElement | null = null;
    public noteContentInput: HTMLInputElement | null = null;
    public noteCloseIcon: HTMLElement | null = null;
    public pickColorIcon: HTMLElement | null = null;
    public paletteColorContainer: HTMLElement | null = null;

    constructor(noteControll: INoteControll) {
        this._note = new Note();
        this._noteControll = noteControll;

        this.selfContainer = <HTMLElement>document.getElementById('note-container');
        this.noteTitleInput = <HTMLInputElement>document.getElementById('note-title-input');
        this.noteContentInput = <HTMLInputElement>document.getElementById('note-content-input');
        this.pickColorIcon = <HTMLElement>document.getElementById('pick-color');
        this.noteCloseIcon = <HTMLElement>document.getElementById('note-close');
        this.paletteColorContainer = <HTMLElement>document.getElementById('color-palette');

        this.initEvents();
    }

    private initEvents() {
        const colorPalette = <NodeListOf<HTMLElement>> this.paletteColorContainer?.querySelectorAll('.color-picker');

        if(colorPalette) {
            colorPalette.forEach(colorPalette => {
                colorPalette.addEventListener('click', (event)=>{
                    let target = <HTMLElement> event.target;
                    let color = target.getAttribute('attr-color');

                    if(color !== null) {
                        this._note.Color.HexColor;
                        this.setSelfContainerColor(color);
                    }
                });
            });
        }

        this.noteTitleInput?.addEventListener('input', (event) => {
            const target = <HTMLInputElement>event.target;
            const value = target.value;
            this.title = value;
        });

        this.noteContentInput?.addEventListener('input', (event) => {
            const target = <HTMLInputElement>event.target;
            const value = target.value;
            this.content = value;
        });

        if(this.noteContentInput !== null) {
            const createNoteContainer = this.getNoteContainer();
            this.noteContentInput.addEventListener('focus', (event) => {
                this.showNotVisibleElements();
            });

            document.addEventListener('click', (event) => {
                const target = <Node> event.target;

                if(target !== this.paletteColorContainer && !createNoteContainer.contains(target)) {
                    this.close();
                }
            });
        }

        if(this.paletteColorContainer !== null){
            document.addEventListener('click', (event) => {
                const target = <Node> event.target;

                if(target !== this.paletteColorContainer && !this.paletteColorContainer?.contains(target) && target !== this.pickColorIcon) {
                    this.hideColorPalette();
                }
            });
        }

        this.pickColorIcon?.addEventListener('click', (event) => {
            this.toogleColorPalette();
        });

        this.noteCloseIcon?.addEventListener('click', (event) => {
            this.close();
        });
    }

    protected toogleColorPalette() {
        this.paletteColorContainer?.classList.toggle('color-palette-active');
    }

    protected showColorPalette() {
        this.paletteColorContainer?.classList.add('color-pallette-active');
    }

    protected hideColorPalette() {
        this.paletteColorContainer?.classList.remove('color-pallette-active');
    }

    protected getNotVilibleElements() {
        const createNoteContainer = this.getNoteContainer();
        return <NodeListOf<HTMLElement>>createNoteContainer?.querySelectorAll('.not-visible');
    }

    protected getNoteContainer() {
        return <HTMLElement>document.getElementById('note-container');
    }

    public showNotVisibleElements() {
        const elements = this.getNotVilibleElements();
        
        elements.forEach(notVisibleElement => {
            notVisibleElement.classList.add('visible');
        });
    }

    public hideNotVisibleElements() {
        const elements = this.getNotVilibleElements();
        
        elements.forEach(notVisibleElement => {
            notVisibleElement.classList.remove('visible');
        });
    } 

    public setDefaultSelfContainerColor() {
        if(this.selfContainer !== null){
            this.selfContainer.style.backgroundColor = this._defaultColor;
        }
    }

    public setSelfContainerColor(HexColor: string | null) {
        if(this.selfContainer !== null && HexColor !== null) {
            this.selfContainer.style.backgroundColor = HexColor;
        }
    }

    public clear() {
        this.title = '';
        this.content = '';
        this._note = new Note();
        this.setDefaultSelfContainerColor();
        this.hideColorPalette();
    }

    private canCreateNote() {
        return this._note.title !== '' || this._note.content !== '';
    }

    public close(createOnClose = true) {
        if(createOnClose && this.canCreateNote()) {
            this._note.createdAt = Date.now();
            this._noteControll.createNote(this._note);
        }

        this.hideNotVisibleElements();
        this.clear();
    }
}