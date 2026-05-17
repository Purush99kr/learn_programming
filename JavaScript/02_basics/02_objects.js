//Objects in javascript are collections of key-value pairs. They can be used to store and organize data in a structured way.
// Objects can be created using object literals, constructors, or the Object.create() method.

// Object constructor syntax
const person1 = new Object();
person1.name = "John";
person1.age = 30;
person1.city = "New York";

// Object.create() method
const person2 = Object.create(Object.prototype);
person2.name = "John";
person2.age = 30;
person2.city = "New York";

// Object literal syntax
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

// Accessing object properties [ accesing Symbols data type too]

const mySym = Symbol("key1"); // Creating a symbol key

const user = {
  name: "Nikhil",
  "Full Name": "Nikhil Kumar",
  [mySym]: "This is a symbol",
  age: 23,
  city: "New Delhi",
  email: "nikhil34@gmail.com",
  contact: 9876543210,
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
};

// console.log(user.name); // Accessing using dot notation
// console.log(user["Full Name"]); // Accessing using bracket notation
// console.log(user[mySym]); // Accessing using symbol key
// console.log(user["age"]); // Accessing using bracket notation

// Modifying object properties
// console.log("Before modification:", user);
user.age = 24;
user["city"] = "Mumbai";
// Object.freeze(user); // Freezing the object to prevent modifications
user.email = "uttam@gmail.com"; // This will not modify the email property due to freezing
// console.log("After modification:", user);

// Deleting object properties
// delete user.contact;
// console.log("After deleting contact:", user);

//Adding functions to the object
user.greeting = function () {
  console.log(`Hello JS User`);
};
user.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am from ${this.city}.`); //to acces same objet properties we can use this keyword which refers to the current object.
};

console.log(user.greeting); // This will log the function definition, not execute it
console.log(user.greet); //function reference is called, not executed

console.log(user.greeting()); // This will execute the greeting function and log "Hello JS User"
console.log(user.greet()); // function executed and log "Hello, my name is Nikhil and I am from Mumbai."
