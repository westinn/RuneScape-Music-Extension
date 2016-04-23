var myAudio = new Audio(),
    onState = false;
const NUM_OF_FILES = 60;

function pickSong() {
    var min = 0;
    index = Math.floor(Math.random() * (NUM_OF_FILES - min + 1) + min);
    return 'music/' + index + '.mp3';
}

chrome.browserAction.onClicked.addListener(function(tab) {
    if (!onState) {
        myAudio.src = pickSong();
        myAudio.currentTime = 0;
        myAudio.play();
        onState = true;
    } else {
        myAudio.pause();
        onState = false;
    }
});

myAudio.addEventListener("ended", function() {
    myAudio.src = pickSong();
    myAudio.currentTime = 0;
    myAudio.play();
});
