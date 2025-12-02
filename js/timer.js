console.log("Timer script loaded");

const timerValueEl = document.getElementById("timerValue");
const timerDisplayEl = document.getElementById("timerDisplayWrapper");

const btnStart = document.getElementById("btnStart");
const btnStop = document.getElementById("btnStop");
const btnReset = document.getElementById("btnReset");

let intervalId = null;

const initialSeconds = parseInt(timerValueEl.innerHTML, 10);

const finishedSound = new Audio("assets/sound/interface-03-277552.mp3");

btnStart.hidden = false;
btnStop.hidden = true;
btnReset.hidden = true;

function startCountdown() {
  if (intervalId !== null) return;
  btnStart.hidden = true;
  btnStop.hidden = false;
  btnReset.hidden = false;
  timerDisplayEl.style.backgroundColor = "var(--bg-timer-active";
  timerDisplayEl.style.border = "3px solid var(--accent-color";

  intervalId = setInterval(function () {
    let currentSeconds = parseInt(timerValueEl.innerHTML, 10);
    currentSeconds--;
    timerValueEl.innerHTML = currentSeconds;
    console.log("Timer: " + currentSeconds);

    if (currentSeconds <= 0) {
      clearInterval(intervalId);
      intervalId = null;
      timerDisplayEl.style.border = "3px solid var(--signal-color-green";

      console.log("Countdown finished");
      finishedSound.play();
      btnStop.hidden = true;
    }
  }, 1000);

  console.log(intervalId);
}

function stopCountdown() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
  timerDisplayEl.style.border = "3px solid var(--signal-color-red";
  timerDisplayEl.style.backgroundColor = "var(--bg-timer-stopped";

  btnStart.hidden = false;
  btnStop.hidden = true;
}

function resetCountdown() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
  timerDisplayEl.style.border = "3px solid var(--accent-color";

  console.log(intervalId);
  timerValueEl.innerHTML = initialSeconds;

  btnStart.hidden = false;
  btnStop.hidden = true;
  btnReset.hidden = true;
}

btnStart.addEventListener("click", function () {
  console.log("Start clicked");

  startCountdown();
});

btnStop.addEventListener("click", function () {
  console.log("Stop clicked");
  btnStart.hidden = false;
  btnStop.hidden = true;
  stopCountdown();
});

btnReset.addEventListener("click", function () {
  console.log("Reset clicked");
  resetCountdown();
});
