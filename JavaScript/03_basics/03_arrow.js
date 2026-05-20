// Arrow function in javascript

// concept of 'this' operator, inside object function
const user = {
  username: "Nikhil",
  price: 399,

  welcomeMessage: function () {
    console.log(`${this.username} , Welcome to the website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "Purushottam";
// user.welcomeMessage();

// console.log(this); //will give empty object in node environment and 'window' object in browser environment

// 'this' operator in a function, all are undefined valued
//method 1
function one() {
  let username = "Sam";
  console.log(this.username); //undefined, not working inside the function
}
// one();

//Method 2
const another = function () {
  let username = "Sam";
  console.log(this.username); //undefined, not working inside the function
};

// another();

//Method 3 [Arrow Function]
const another1 = () => {
  let username = "Sam";
  console.log(this.username); //undefined, not working inside the function
};

// another1();

// +++++++++++++++++++++++++++++++++++++++++{Arrow Function Begins}+++++++++++++++++++++++++++++++++++++
() => {}; //sytax

//Method 1
const addTwoMethod1 = (num1, num2) => num1 + num2;
console.log(addTwoMethod1(3, 7));

//Method 2
const addTwoMethod2 = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwoMethod2(3, 7));

//Method 3, returning an object implicitly
const method3 = (message) => ({ user: "Nikhil", age: 23 });
console.log(method3("hello"));
