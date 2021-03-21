let boomSound: HTMLAudioElement;
let clapSound: HTMLAudioElement;
let hihatSound: HTMLAudioElement;
let kickSound: HTMLAudioElement;
let openhatSound: HTMLAudioElement;
let rideSound: HTMLAudioElement;
let snareSound: HTMLAudioElement;
let tinkSound: HTMLAudioElement;
let tomSound: HTMLAudioElement;

startApp();

function startApp():void{
    document.addEventListener('keypress', onKeyPress);
}

function getAudio():void{
    boomSound = document.querySelector('[data-sound="boom"]');
    clapSound = document.querySelector('[data-sound="clap"]');
    hihatSound = document.querySelector('[data-sound="hihat"]');
    kickSound = document.querySelector('[data-sound="kick"]');
    openhatSound = document.querySelector('[data-sound="openhat"]');
    rideSound = document.querySelector('[data-sound="ride"]');
    snareSound = document.querySelector('[data-sound="snare"]');
    tinkSound = document.querySelector('[data-sound="tink"]');
    tomSound = document.querySelector('[data-sound="tom"]');
}

function onKeyPress(ev: KeyboardEvent): void{
    const key = ev.key;
    const time = ev.timeStamp;

    playSound(key);
}

function playSound(key: string){
    switch(key){
        case key="q":
            boomSound.play();
            boomSound.style.backgroundColor = "#d6d2d2be";
            break;
        case key="w":
            clapSound.play();
            boomSound.style.backgroundColor = "#d6d2d2be";
            break;
        case key="e":
            hihatSound.play();
            boomSound.style.backgroundColor = "#d6d2d2be"; 
            break;
        case key="r":
            kickSound.play();
            boomSound.style.backgroundColor = "#d6d2d2be"; 
            break;
        case key="t":
            openhatSound.play();
            boomSound.style.backgroundColor = "#d6d2d2be"; 
            break;
        case key="a":
            rideSound.play(); 
            boomSound.style.backgroundColor = "#d6d2d2be";
            break;
        case key="s":
            snareSound.play(); 
            boomSound.style.backgroundColor = "#d6d2d2be";
            break;
        case key="d":
            tinkSound.play(); 
            boomSound.style.backgroundColor = "#d6d2d2be";
            break;
        case key="f":
            tomSound.play(); 
            boomSound.style.backgroundColor = "#d6d2d2be";
            break;
    }     
}