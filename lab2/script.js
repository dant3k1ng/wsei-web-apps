var boomSound = document.querySelector('[data-sound="boom"]');
var clapSound = document.querySelector('[data-sound="clap"]');
var hihatSound = document.querySelector('[data-sound="hihat"]');
var kickSound = document.querySelector('[data-sound="kick"]');
var openhatSound = document.querySelector('[data-sound="openhat"]');
var rideSound = document.querySelector('[data-sound="ride"]');
var snareSound = document.querySelector('[data-sound="snare"]');
var tinkSound = document.querySelector('[data-sound="tink"]');
var tomSound = document.querySelector('[data-sound="tom"]');
var recTrac1Btn = document.querySelector('#startRecTrack1');
var recTrac2Btn = document.querySelector('#startRecTrack2');
var recTrac3Btn = document.querySelector('#startRecTrack3');
var recTrac4Btn = document.querySelector('#startRecTrack4');
var track1 = [];
var track2 = [];
var track3 = [];
var track4 = [];
var recordingTrack;
startApp();
function startApp() {
    document.addEventListener('keypress', onKeyPress);
    recTrac1Btn.addEventListener('click', recTrack1);
    recTrac2Btn.addEventListener('click', recTrack2);
    recTrac3Btn.addEventListener('click', recTrack3);
    recTrac4Btn.addEventListener('click', recTrack4);
    var track1Btn = document.querySelector('#playTrack1');
    track1Btn.addEventListener('click', playTrack1);
    var track2Btn = document.querySelector('#playTrack2');
    track2Btn.addEventListener('click', playTrack2);
    var track3Btn = document.querySelector('#playTrack3');
    track3Btn.addEventListener('click', playTrack3);
    var track4Btn = document.querySelector('#playTrack4');
    track4Btn.addEventListener('click', playTrack4);
}
function recTrack1() {
    recTrac1Btn.style.backgroundColor = '#bb2e2e';
    recordingTrack = 1;
}
function recTrack2() {
    recTrac2Btn.style.backgroundColor = '#bb2e2e';
    recordingTrack = 2;
}
function recTrack3() {
    recTrac3Btn.style.backgroundColor = '#bb2e2e';
    recordingTrack = 3;
}
function recTrack4() {
    recTrac4Btn.style.backgroundColor = '#bb2e2e';
    recordingTrack = 4;
}
function playTrack1() {
    track1.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function playTrack2() {
    track2.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function playTrack3() {
    track3.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function playTrack4() {
    track4.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function onKeyPress(ev) {
    var key = ev.key;
    var time = ev.timeStamp;
    switch (recordingTrack) {
        case 1:
            track1.push({ key: key, time: time });
            break;
        case 2:
            track2.push({ key: key, time: time });
            break;
        case 3:
            track3.push({ key: key, time: time });
            break;
        case 4:
            track4.push({ key: key, time: time });
            break;
    }
    playSound(key);
}
function playSound(key) {
    switch (key) {
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
