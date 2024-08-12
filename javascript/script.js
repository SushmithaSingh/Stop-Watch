//Variables for Buttons

const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

//Variables for Time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//Variables for leading zero
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

//Variables for set interval and timer status

let timeInterval = null;
let timerStatus = "stopped";

//Stop watch function

function stopWatch() {
    seconds++;
    if (seconds / 60 === 60) {
        minutes++;


        if (minutes / 60 === 60) {
            hours++;
        }
    }

    if (seconds < 10) {
        leadingSeconds = "0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }

    if (minutes < 10) {
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }

    if (hours < 10) {
        leadingHours = "0" + minutes.toString();
    } else {
        leadingHours = hours;
    }

    let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}


// window.setInterval(stopWatch, 1000);


startStopBtn.addEventListener('click', function () {
    if (timerStatus === "stopped") {
        timeInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = `<i class = "fa-solid fa-pause" id = "pause"></i>`;
        timerStatus = "started";
    } else {
        window.clearInterval(timeInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class = "fa-solid fa-play" id = "play"></i>`;
        timerStatus = "stopped";
    }
});

resetBtn.addEventListener('click', function () {
    window.clearInterval(timeInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerHTML = `00:00:00`;
});