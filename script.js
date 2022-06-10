const audio = document.getElementById("audio");
//const vinil = document.getElementById("vinil");
const progress = document.getElementById("progress");

let playIcon = document.getElementById("play");
let pauseIcon = document.getElementById("pause");
let nextIcon = document.getElementById("next");
let prevIcon = document.getElementById("prev");
const current = document.getElementById('current');
const end = document.getElementById('end');

let isPlay = false;

function playPause() {
    console.log('hey')
    if (!isPlay) {

        playIcon.style.display = "none";
        pauseIcon.style.display = "block";

        //vinil.style.animation = "vinil 3s infinite linear"

        audio.play();
        isPlay = true;
    }else {
        playIcon.style.display = "block";
        pauseIcon.style.display = "none";

        //vinil.style.animation = "vinil 0s infinite linear"
        
        audio.pause();
        isPlay = false;
    }
}

function error() {
    alert("developer doesn't add this function yet")
}

playIcon.addEventListener('click', playPause);
pauseIcon.addEventListener('click', playPause);

prevIcon.addEventListener('click', error);
nextIcon.addEventListener('click', error);

function showProgress() {
    progress.max = audio.duration;
    progress.value = audio.currentTime;

    current.textContent = formater(audio.currentTime);
    end.textContent = formater(audio.duration);
}

function formater(sec) {
    m = Math.floor(sec /60);
    s = Math.floor(sec - m * 60);
    

    ms = (m >= 10)? `${m}`: `0${m}`;
    ss = (s >= 10)? `${s}`: `0${s}`;
    return `${ms}:${ss}`;
}

function ghange() {
    audio.currentTime = progress.value;
}

setInterval(showProgress, 500);

progress.addEventListener('click', ghange)