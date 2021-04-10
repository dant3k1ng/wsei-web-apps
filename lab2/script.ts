const boom :HTMLElement = document.querySelector('.boom');

let boomSound : HTMLAudioElement = document.querySelector('[data-sound="boom"]');
let clapSound: HTMLAudioElement = document.querySelector('[data-sound="clap"]');
let hihatSound: HTMLAudioElement = document.querySelector('[data-sound="hihat"]');
let kickSound: HTMLAudioElement = document.querySelector('[data-sound="kick"]');
let openhatSound: HTMLAudioElement = document.querySelector('[data-sound="openhat"]');
let rideSound: HTMLAudioElement = document.querySelector('[data-sound="ride"]');
let snareSound: HTMLAudioElement = document.querySelector('[data-sound="snare"]');
let tinkSound: HTMLAudioElement = document.querySelector('[data-sound="tink"]');
let tomSound: HTMLAudioElement = document.querySelector('[data-sound="tom"]');

let recTrac1Btn: HTMLElement = document.querySelector('#startRecTrack1');
let recTrac2Btn: HTMLElement = document.querySelector('#startRecTrack2');
let recTrac3Btn: HTMLElement = document.querySelector('#startRecTrack3');
let recTrac4Btn: HTMLElement = document.querySelector('#startRecTrack4');

let track1: any[] = [];
let track2: any[] = [];
let track3: any[] = [];
let track4: any[] = [];

let recordingTrack: number;

startApp();

function startApp():void{
    document.addEventListener('keypress', onKeyPress);

    recTrac1Btn.addEventListener('click', recTrack1);
    recTrac2Btn.addEventListener('click', recTrack2);
    recTrac3Btn.addEventListener('click', recTrack3);
    recTrac4Btn.addEventListener('click', recTrack4);
    
    const track1Btn = document.querySelector('#playTrack1');
    track1Btn.addEventListener('click', playTrack1);
    const track2Btn = document.querySelector('#playTrack2');
    track2Btn.addEventListener('click', playTrack2);
    const track3Btn = document.querySelector('#playTrack3');
    track3Btn.addEventListener('click', playTrack3);
    const track4Btn = document.querySelector('#playTrack4');
    track4Btn.addEventListener('click', playTrack4);
}

function recTrack1(): void{
    recTrac1Btn.style.backgroundColor = '#bb2e2e';
    recordingTrack = 1;
}
function recTrack2(): void{
    recTrac2Btn.style.backgroundColor = '#bb2e2e';
    recordingTrack = 2;
}
function recTrack3(): void{
    recTrac3Btn.style.backgroundColor = '#bb2e2e';
    recordingTrack = 3;
}
function recTrack4(): void{
    recTrac4Btn.style.backgroundColor = '#bb2e2e';
    recordingTrack = 4;
}

function playTrack1(): void{
    track1.forEach(sound => {
        setTimeout(() => playSound(sound.key, sound.time), sound.time)
    })
}

function playTrack2(): void{
    track2.forEach(sound => {
        setTimeout(() => playSound(sound.key, sound.time), sound.time)
    })
}

function playTrack3(): void{
    track3.forEach(sound => {
        setTimeout(() => playSound(sound.key, sound.time), sound.time)
    })
}

function playTrack4(): void{
    track4.forEach(sound => {
        setTimeout(() => playSound(sound.key, sound.time), sound.time)
    })
}

function onKeyPress(ev: KeyboardEvent): void{
    let key: string = ev.key;
    let time: number = ev.timeStamp;

    switch(recordingTrack){
        case 1:
            track1.push({key, time});
            break;
        case 2:
            track2.push({key, time});
            break;
        case 3:
            track3.push({key, time});
            break;
        case 4:
            track4.push({key, time});
            break;
    }

    playSound(key, time);
} 


function playSound(key: string, time: number):void{
    switch(key){
        case "q":
            boomSound.currentTime = 0;
            boomSound.play();
            break;
        case "w":
            clapSound.currentTime = 0;
            clapSound.play();
            break;
        case "e":
            hihatSound.currentTime = 0;
            hihatSound.play();
            break;
        case "r":
            kickSound.currentTime = 0;
            kickSound.play();
            break;
        case "t":
            openhatSound.currentTime = 0;
            openhatSound.play();
            break;
        case "a":
            rideSound.currentTime = 0;
            rideSound.play(); 
            break;
        case "s":
            snareSound.currentTime = 0;
            snareSound.play(); 
            break;
        case "d":
            tinkSound.currentTime = 0;
            tinkSound.play(); 
            break;
        case "f":
            tomSound.currentTime = 0;
            tomSound.play(); 
            break;
    }     
}