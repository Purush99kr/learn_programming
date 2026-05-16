//Number is a primitive data type in JavaScript that represents numeric values. It can be an integer, a floating-point number, or a special value like NaN (Not-a-Number) or Infinity.

//Creating numbers

const score = 400;
// console.log(score); // Output: 400 -> javascript automatically converts it to a Number

const price = new Number(100);
// console.log(price); // Output: [Number: 100] (not a primitive number) [declared forcily a number]

//number methods
const num = 123.456;
const hundreds = 10000000;
// console.log(num.toFixed(2)); // Output: 123.46 (rounds to 2 decimal places)
// console.log(num.toExponential(2)); // Output: 1.23e+2 (exponential notation with 2 decimal places)
// console.log(num.toPrecision(4)); // Output: 123.5 (rounds to 4 significant digits)
// console.log(num.toString()); // Output: "123.456" (converts number to string)
// console.log(num.toLocaleString()); // Output: "123.456" (formats number according to locale)
// console.log(hundreds.toLocaleString()); // Output: "10,000,000" (formats number according to locale)
// console.log(hundreds.toLocaleString("en-IN")); // Output: "10,000,000" (formats number according to Indian locale)

//Number properties
// console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308 (largest representable number)
// console.log(Number.MIN_VALUE); // Output: 5e-324 (smallest representable number)
// console.log(Number.POSITIVE_INFINITY); // Output: Infinity (positive infinity)
// console.log(Number.NEGATIVE_INFINITY); // Output: -Infinity (negative infinity)
// console.log(Number.NaN); // Output: NaN (Not-a-Number)

// +++++++++++++++++++++++++++{Math}+++++++++++++++++++++++++++

//Math is a built-in object in JavaScript that provides properties and methods for mathematical constants and functions. It is not a constructor, so you cannot create instances of Math.

// console.log(Math); // Output: [Math: Math] (the Math object itself)

//Math methods
// console.log(Math.PI); // Output: 3.141592653589793 (the value of π)
// console.log(Math.E); // Output: 2.718281828459045 (the value of e)
// console.log(Math.sqrt(16)); // Output: 4 (square root of 16)
// console.log(Math.pow(2, 3)); // Output: 8 (2 raised to the power of 3)
// console.log(Math.abs(-5)); // Output: 5 (absolute value of -5)
// console.log(Math.round(4.7)); // Output: 5 (rounds to the nearest integer)
// console.log(Math.floor(4.7)); // Output: 4 (rounds down to the nearest integer)
// console.log(Math.ceil(4.2)); // Output: 5 (rounds up to the nearest integer)
// console.log(Math.random()); // Output: a random number between 0 (inclusive) and 1 (exclusive)
// console.log(Math.max(1, 5, 3)); // Output: 5 (the largest of the given numbers)
// console.log(Math.min(1, 5, 3)); // Output: 1 (the smallest of the given numbers)

//++++++++++++++++++++++++++{Random Numbers questions}+++++++++++++++++++++++++++
// console.log(Math.random()); // Output: a random number between 0 (inclusive) and 1 (exclusive)
// console.log(Math.random() * 10); // Output: a random number between 0 (inclusive) and 10 (exclusive)
// console.log((Math.random() * 10) + 1); // Output: a random number between 1 (inclusive) and 11 (exclusive)

//we have to generate the output of the dice roll game.

const min = 1;
const max = 6;

const result = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(result);
