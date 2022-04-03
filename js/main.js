// initializing variable
let today = new Date();
let future = new Date(today.getFullYear() + "-04-04");
let diffMs = future - today;
let days = Math.floor(diffMs / 86400000);
let hours = Math.floor(24 - today.getHours());
let seconds = Math.round(hours * 3600);
var minutes = Math.floor(hours * 60);
const timerEl = document.querySelectorAll(".timer-text");

const display = (days, hours, minutes, seconds) => {
  timerEl[0].textContent = `${days}`;
  timerEl[1].textContent = `${hours}`;
  timerEl[2].textContent = `${minutes}`;
  timerEl[3].textContent = `${seconds}`;
};

// Calling Function

display(days, hours, minutes, seconds);
