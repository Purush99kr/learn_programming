// Data types conversion in a javascript is a process of converting one data type to another.

// There are two types of data type conversion in javascript:
// 1. Implicit type conversion (type coercion)
// 2. Explicit type conversion (type casting)
// Implicit type conversion (type coercion) is when javascript automatically converts one data type to another when performing an operation. For example:
let x = 5 + "5";
// console.log(x); // Output: "55"
// In the above example, javascript automatically converts the number 5 to a string "5" and concatenates it with the string "5" to produce the result "55".
// Explicit type conversion (type casting) is when we manually convert one data type to another using built-in functions. For example:
let y = "5";
let z = Number(y);
// console.log(z); // Output: 5
// In the above example, we use the Number() function to convert the string "5" to a number 5.
// Here are some common functions for explicit type conversion in javascript:
// 1. Number(): Converts a value to a number.
// 2. String(): Converts a value to a string.
// 3. Boolean(): Converts a value to a boolean.
// 4. parseInt(): Parses a string and returns an integer.
// 5. parseFloat(): Parses a string and returns a floating-point number.
// It's important to note that implicit type conversion can sometimes lead to unexpected results, so it's generally recommended to use explicit type conversion when necessary to avoid confusion.
// Here are some examples of explicit type conversion:

// Converting into Number
let score = "100abc";
let numericScore = Number(score);

console.log(numericScore);

// "100" => 100
// "string" => NaN
// "100abc" => NaN
// true => 1, false => 0
// null => 0, undefined => NaN

// Converting into boolean
let isActive = "";
let booleanValue = Boolean(isActive);
console.log(booleanValue);

// "" => false, "0" => true, "false" => true
// 0 => false, 1 => true, NAN => false
// null => false, undefined => false
