var myAudio = new Audio(),
    onState = false;
const NUM_OF_FILES = 60;
const VOLUME = 0.5;

myAudio.volume = VOLUME;

function pickSong() {
    var min = 0;
    index = Math.floor(Math.random() * (NUM_OF_FILES - min + 1) + min);
    return '/music/' + index + '.mp3';
}

function playSong() {
    myAudio.src = pickSong();
    myAudio.currentTime = 0;
    myAudio.play();
}

function changeIcon(state) {
    // On and want to change to play symbol
    if (state) {
        chrome.browserAction.setIcon({
            path: {
                "38": "/images/icon38play.png"
            }
        });
    }
    // Off and want to change to default
    else {
        chrome.browserAction.setIcon({
            path: {
                "38": "/images/icon38.png"
            }
        });
    }
}

chrome.browserAction.onClicked.addListener(function(tab) {
    // Not on and clicked
    if (!onState) {
        playSong();
        onState = true;
        changeIcon(onState);
    }
    // On and clicked
    else {
        myAudio.pause();
        onState = false;
        changeIcon(onState);
    }
});

myAudio.addEventListener("ended", playSong());
