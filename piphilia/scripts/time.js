const timer = document.getElementById("timer");

let timerInterval;
let isPaused = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let display = "00:00";
let started = false;

function startTime() {
  started = true;

  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  display =
    (hours > 0 ? hours + ":" : "") +
    ("0" + minutes).slice(-2) +
    ":" +
    ("0" + seconds).slice(-2);

  timer.textContent = display;
}

function endGame() {
  clearInterval(timerInterval);
  return timer.textContent;
}

function getTime() {
  return timer.textContent;
}

function convertTimeHMS(timeStr) {
  const timeComponents = timeStr.split(":");

  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if (timeComponents.length === 3) {
    hours = parseInt(timeComponents[0]);
    minutes = parseInt(timeComponents[1]);
    seconds = parseInt(timeComponents[2]);
  } else if (timeComponents.length === 2) {
    minutes = parseInt(timeComponents[0]);
    seconds = parseInt(timeComponents[1]);
  } else {
    return "Invalid time format";
  }

  let result = "";
  if (hours > 0) {
    result += hours + "h ";
  }
  if (minutes > 0) {
    result += minutes + "m ";
  }
  if (seconds > 0) {
    result += seconds + "s ";
  }

  return result.trim();
}

// convert the time string (hh:mm:ss or mm:ss) to milliseconds
function convertTimeToMilliseconds(timeStr) {
  const timeComponents = timeStr.split(":");

  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if (timeComponents.length === 3) {
    hours = parseInt(timeComponents[0]);
    minutes = parseInt(timeComponents[1]);
    seconds = parseInt(timeComponents[2]);
  } else if (timeComponents.length === 2) {
    minutes = parseInt(timeComponents[0]);
    seconds = parseInt(timeComponents[1]);
  } else {
    return "Invalid time format";
  }

  return hours * 3600000 + minutes * 60000 + seconds * 1000;
}

function convertMillisecondsToTime(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;

  let result = "";
  if (hours > 0) {
    result += hours + "h ";
  }
  if (minutes > 0) {
    result += minutes + "m ";
  }
  if (seconds > 0) {
    result += seconds + "s ";
  }

  return result.trim();
}
