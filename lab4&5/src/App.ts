import './style.scss';
import Note from './Note'
import NotesHandling from './Notes';


export class App {
    constructor(){
        this.downloadExistingNotes();
        this.addButton();
    }

    addButton() {
        const addButton = <HTMLInputElement>document.getElementById('add');
        addButton.addEventListener('click', (ev: Event) => Note.downloadData());
    }

    downloadExistingNotes(){
        NotesHandling.getCollection();
    }
}

/*
Projekt 4 – Notekeep 

 

Aplikacja pozwala na tworzenie, przechowywanie, edycję i usuwanie notatek. Każda notatka musi w minimalnej formie posiadać: 

Tytuł 

Treść 

Kolor notatki 

Możliwość przypięcia do góry na liście notatek 

Datę utworzenia 

Notatki powinny być zapisywane w localStorage i wyświetlane w formie tablicy notatek na stronie głównej aplikacji. 

 
Wersja ciekawsza: 

Zapisywanie daty przypomnień (i generowanie przypomnień w formie Notification) 

Tagowanie notatek 

Wyszukiwarka notatek (po wszystkich dostępnych pola notatki) 

 

Przykłady: Google Keep, Evernote, Onenote 

Ważne: wykorzystaj projekt Pogodynka I dokonaj refaktoryzacji kodu. 

Projekt  NoteKeep powinien składać się w minimalnej formie z klas App, Notes, Note, AppStorage. 

Każda klasa powinna być w osobnym pliku 

Zdefiniuj interfejs do obiektu AppStorage 

Użyj Sass do formatowania wizualnego 
*/