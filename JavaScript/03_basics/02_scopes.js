//scope concept in javascript

let a = 10;
const b = 20;
var c = 30;

if (true) {
  let a = 40;
  const b = 50;
  var c = 60;
  c = 70;
}

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 70

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//local and global and block scope

//global scope
let x = 100;
const y = 200;
var z = 300;

function test() {
  //local scope
  let x = 400;
  const y = 500;
  var z = 600;
  console.log("Local Scope: ", x, y, z); // 400, 500, 600
}

test(); // calling the function to execute the code inside it

console.log("Global Scope: ", x, y, z); // 100, 200, 300

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Nested function and scope

function one() {
  let userName = "Nikhil";

  function two() {
    let email = "nk123@gmail.com";
    const website = "www.nikhil.com";
    console.log(
      `Fn : Hello ${userName}, your email is ${email} and your website is ${website}`,
    );
  }
  console.log(email); // ReferenceError: email is not defined
  two();
}
// console.log(userName); // ReferenceError: userName is not defined
// one();  // calling the function to execute the code inside it

//Nesting using if block

if (true) {
  let name = "Nikhil";

  if (name === "Nikhil") {
    let email = "nk123@gmail.com";
    const website = "www.nikhil.com";
    console.log(
      `If : Hello ${name}, your email is ${email} and your website is ${website}`,
    );
  }

  //   console.log(email); // ReferenceError: email is not defined
}

// console.log(name); // ReferenceError: name is not defined

//++++++++++++++++++++++{Function Declaration concepts }++++++++++++++++++++

//method 1

function typeOne(num) {
  return num + 10;
}
typeOne(5); // 15

//method 2
const typeTwo = function (num) {
  return num + 20;
};
typeTwo(5); // 25

//method 3
const typeThree = (num) => {
  return num + 30;
};
typeThree(5); // 35

//method 4
const typeFour = (num) => num + 40;
typeFour(5); // 45
