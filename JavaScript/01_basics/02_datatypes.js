"use strict"; //Treat all code as modern JavaScript

/* Data Types in JavaScript */

const dataTypes = {
  // ===============================
  // Primitive Data Types
  // ===============================
  primitives: {
    String: "Nikhil Singh",
    Number: 30,
    Boolean: true,
    Null: null,
    Undefined: undefined,
    Symbol: Symbol("id"),
    BigInt: 123456789012345678901234567890n,
  },

  // ===============================
  // Non-Primitive Data Types
  // ===============================
  nonPrimitives: {
    Object: {
      name: "Nikhil",
      age: 25,
    },

    Array: [10, 20, 30, 40],

    Function: function greet() {
      return "Hello World";
    },

    Date: new Date(),

    RegExp: /javascript/i,

    Map: new Map([
      ["name", "Nikhil"],
      ["age", 25],
    ]),

    Set: new Set([1, 2, 3, 4]),

    Promise: Promise.resolve("Resolved"),
  },
};

console.log("====== Primitive Data Types ======");

for (let key in dataTypes.primitives) {
  console.log(
    `${key} =>`,
    dataTypes.primitives[key],
    "| Type:",
    typeof dataTypes.primitives[key],
  );
}

console.log("\n====== Non-Primitive Data Types ======");

for (let key in dataTypes.nonPrimitives) {
  console.log(
    `${key} =>`,
    dataTypes.nonPrimitives[key],
    "| Type:",
    typeof dataTypes.nonPrimitives[key],
  );
}

// 1. String
let name = "John Doe";
// console.log(typeof name); // Output: string

// 2. Number
let age = 30;
// console.log(typeof age); // Output: number

// 3. Boolean
let isStudent = true;
// console.log(typeof isStudent); // Output: boolean

// 4. Null
let emptyValue = null;
// console.log(typeof emptyValue); // Output: object (this is a known quirk in JavaScript)

// 5. Undefined
let undefinedValue;
// console.log(typeof undefinedValue); // Output: undefined

// 6. Symbol
let uniqueId = Symbol("id");
// console.log(typeof uniqueId); // Output: symbol

// 7. BigInt
let bigNumber = 123456789012345678901234567890n;
// console.log(typeof bigNumber); // Output: bigint

// 8. Object
let person = {
  name: "Alice",
  age: 30,
};
// console.log(typeof person); // Output: object

// 9. Array (which is a type of object)
let numbers = [1, 2, 3, 4, 5];
// console.log(typeof numbers); // Output: object

// 10. Function (which is also a type of object)
function greet() {
  return "Hello!";
}
// console.log(typeof greet); // Output: function

// 11. Date (which is a type of object)
let currentDate = new Date();
// console.log(typeof currentDate); // Output: object

// 12. RegExp (which is a type of object)
let regex = /abc/;
// console.log(typeof regex); // Output: object

// 13. Map (which is a type of object)
let myMap = new Map();
// console.log(typeof myMap); // Output: object

// 14. Set (which is a type of object)
let mySet = new Set();
// console.log(typeof mySet); // Output: object

// 15. WeakMap (which is a type of object)
let myWeakMap = new WeakMap();
// console.log(typeof myWeakMap); // Output: object

// 16. WeakSet (which is a type of object)
let myWeakSet = new WeakSet();
// console.log(typeof myWeakSet); // Output: object
