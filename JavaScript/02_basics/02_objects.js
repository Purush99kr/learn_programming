//Objects in javascript are collections of key-value pairs. They can be used to store and organize data in a structured way.
// Objects can be created using object literals, constructors, or the Object.create() method.

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
// delete user.contact
// console.log("After deleting contact:", user);

//Adding functions to the object
user.greeting = function () {
  console.log(`Hello JS User`);
};
user.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am from ${this.city}.`); //to acces same objet properties we can use this keyword which refers to the current object.
};

// console.log(user.greeting); // This will log the function definition, not execute it
// console.log(user.greet); //function reference is called, not executed

// console.log(user.greeting()); // This will execute the greeting function and log "Hello JS User"
// console.log(user.greet()); // function executed and log "Hello, my name is Nikhil and I am from Mumbai."

// ++++++++++++++++++++++++++++++{ Constructor and Object.create() }+++++++++++++++++++++++++++++++

// Object constructor syntax
const person1 = new Object();
person1.name = "John";
person1.age = 30;
person1.city = "New York";
// console.log(person1);

// Object.create() method
const person2 = Object.create(Object.prototype);
person2.name = "John";
person2.age = 30;
person2.city = "New York";
// console.log(person2);

// object inside an object
const person3 = {
  FullName: {
    firstName: "Nikhil",
    lastName: "Kumar",
  },
  age: 23,
  city: "New Delhi",
  email: "user@gmail.com",
};
// console.log(person3);
// console.log(person3.FullName);
// console.log(person3.FullName.firstName);

//object concatenation, we can merge two objects using the spread operator (...) or Object.assign() method.
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
// console.log(mergedObj);

const obj3 = { e: 5, f: 6 };
const mergedObj2 = Object.assign({}, obj1, obj2, obj3); // {} is the target object where properties will be copied, obj1, obj2, and obj3 are the source objects.
// console.log(mergedObj2);

// Accessing Arrays of Objects
const users = [
  {
    id: 1,
    name: "Nikhil",
    age: 22,
  },
  {
    id: 2,
    name: "Uttam",
    age: 12,
  },
  {
    id: 3,
    name: "Mohan",
    age: 30,
  },
  {
    id: 4,
    name: "Purushottam",
    age: 13,
  },
];

// console.log(users);
// console.log(users[0]);
// console.log(users[0].name);

// Object methods
// Object.keys() - returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
// Object.values() - returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.
// Object.entries() - returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop.
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty("name")); // checks if the object has the specified property as its own property (not inherited)
console.log(user.hasOwnProperty("toString")); // toString is an inherited property from Object.prototype, so it will return false
