//To receive user input, run : npm install prompt-sync and follow the below code
//Switch sytax
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const prompt = require("prompt-sync")();

let month = prompt("Enter the month Name(Use Capital): ");
// console.log(typeof month);

switch (month) {
  case "1":
    console.log("Month : January");
    break;
  case "2":
    console.log("Month : February");
    break;
  case "2":
    console.log("Month : March");
    break;
  case "2":
    console.log("Month : April");
    break;
  case "2":
    console.log("Month : May");
    break;
  case "2":
    console.log("Month : June");
    break;
  case "2":
    console.log("Month : July");
    break;
  case "2":
    console.log("Month : August");
    break;
  case "2":
    console.log("Month : September");
    break;
  case "10":
    console.log("Month : Ovtober");
    break;
  case "11":
    console.log("Month : November");
    break;
  case "12":
    console.log("Month : December");
    break;

  default:
    console.log(
      "Enter the correct value starting from 1 to 12, to get month's name.",
    );
}

// const prompt = require("prompt-sync")();

// let username = prompt("Enter username: ");
// let password = prompt("Enter password: ");

// if (username === "admin" && password === "1234") {
//   console.log("Login Successful");
// } else {
//   console.log("Invalid Credentials");
// }
