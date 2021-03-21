var boomSound;
var clapSound;
var hihatSound;
var kickSound;
var openhatSound;
var rideSound;
var snareSound;
var tinkSound;
var tomSound;
startApp();
function startApp() {
    document.addEventListener('keypress', onKeyPress);
}
function getAudio() {
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
function onKeyPress(ev) {
    var key = ev.key;
    var time = ev.timeStamp;
    playSound(key);
}
function playSound(key) {
    switch (key) {
        case key = "q":
            boomSound.play();
            boomSound.style.backgroundColor = "#d6d2d2be";
            break;
        case key = "w":
            clapSound.play();
            boomSound.style.backgroundColor = "#d6d2d2be";
            break;
        case key = "e":
            hihatSound.play();
            boomSound.style.backgroundColor = "#d6d2d2be";
            break;
        case key = "r":
            kickSound.play();
            boomSound.style.backgroundColor = "#d6d2d2be";
            break;
        case key = "t":
            openhatSound.play();
            boomSound.style.backgroundColor = "#d6d2d2be";
            break;
        case key = "a":
            rideSound.play();
            boomSound.style.backgroundColor = "#d6d2d2be";
            break;
        case key = "s":
            snareSound.play();
            boomSound.style.backgroundColor = "#d6d2d2be";
            break;
        case key = "d":
            tinkSound.play();
            boomSound.style.backgroundColor = "#d6d2d2be";
            break;
        case key = "f":
            tomSound.play();
            boomSound.style.backgroundColor = "#d6d2d2be";
            break;
    }
}
