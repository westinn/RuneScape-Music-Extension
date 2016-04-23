var myAudio = new Audio();
var onState = false;

chrome.browserAction.onClicked.addListener(function(tab) {
    if (!onState) {
        myAudio.src = "music/osrs.mp3";
        myAudio.currentTime = 0;
        myAudio.play();
        onState = true;
    } else {
        myAudio.pause();
        onState = false;
    }
});

var pickSong = function() {
    var min = 0,
        max = sizeOfSongLibrary,
        index = Math.floor(Math.random() * (max - min + 1) + min);
}
