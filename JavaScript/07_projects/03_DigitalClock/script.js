const clock = document.getElementById("clock");
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

//In order to execute any function continuosly, we use "setInterval(call back fn, 10000)" function in javaScript.
