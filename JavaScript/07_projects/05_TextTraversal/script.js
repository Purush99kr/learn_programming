const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const logs = document.getElementById("logs");
const newText = document.getElementById("name");

let intervalId;
let intervalId1;

const changeText = function () {
  newText.innerHTML = `JS is also an Async language! [${new Date().toLocaleTimeString()}]`;
};

const changeText1 = function () {
  const h1 = document.createElement("h1");
  h1.innerHTML = `JS is also an Async language! [${new Date().toLocaleTimeString()}]`;
  logs.appendChild(h1);
  logs.scrollTop = logs.scrollHeight;
};

startBtn.addEventListener("click", function () {
  if (!intervalId) {
    intervalId = setInterval(changeText, 1000);
    intervalId1 = setInterval(changeText1, 1000);
  }
});

stopBtn.addEventListener("click", function () {
  clearInterval(intervalId);
  clearInterval(intervalId1);
  intervalId1 = null;
  intervalId = null;
});

resetBtn.addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = null;
  newText.innerHTML = "JavaScript is a single-threaded language !";
  clearInterval(intervalId1);
  intervalId1 = null;
  const a = (logs.innerHTML = "");
});

// reset methods : logs.replaceChildren(); while (logs.firstChild) {
//   logs.removeChild(logs.firstChild);}
