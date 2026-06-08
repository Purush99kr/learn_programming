startBtn = document.getElementById("start");
stopBtn = document.getElementById("stop");
resetBtn = document.getElementById("reset");
const body = document.querySelector("body");

let intervalId;

// generating the random color
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// const hex = "0123456789ABCDEF";
// let color = hex[Math.floor(Math.random() * 16)];
// console.log(`Value: `, Math.floor(Math.random() * 16));
// console.log(color);

//changing background color
const startChangingColor = function () {
  function changeBgColor() {
    body.style.backgroundColor = randomColor();
  }

  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};
const resetChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
  body.style.backgroundColor = "";
};

//event for start button
startBtn.addEventListener("click", startChangingColor);

//event for stop button
stopBtn.addEventListener("click", stopChangingColor);

//event for reset button
resetBtn.addEventListener("click", resetChangingColor);
