//String is a primitive data type in JavaScript that represents a sequence of characters. It is used to store and manipulate text. Strings can be created using single quotes (' '), double quotes (" "), or backticks (` `) for template literals.

//Creating strings
let singleQuoteString = "Hello, World!";
let doubleQuoteString = "Hello, World!";
let templateLiteralString = `Hello, World!`;
let strz = new String("Hello, World!"); // Using String constructor (not recommended)
console.log(singleQuoteString); // Output: Hello, World!
console.log(doubleQuoteString); // Output: Hello, World!
console.log(templateLiteralString); // Output: Hello, World!
console.log(strz); // Output: [String: 'Hello, World!'] (not a primitive string)

//String concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: John Doe

//String interpolation using template literals
let age = 30;
let greeting = `My name is ${fullName} and I am ${age} years old.`;
console.log(greeting); // Output: My name is John Doe and I am 30 years old.

//string indexing
let str3 = "Hello, World!";
console.log(str3[0]); // Output: H
console.log(str3[7]); // Output: W
console.log(str3[str3.length - 1]); // Output: !

//String immutability
let str4 = "Hello";
str4[0] = "h";
console.log(str4); // Output: Hello (unchanged)

//String slicing [string.slice(start, end)]
let str5 = "Hello, World!";
console.log(str5.slice(0, 5)); // Output: Hello
console.log(str5.slice(7)); // Output: World!
console.log(str5.slice(-6)); // Output: World!
console.log(str5.slice(-6, -1)); // Output: World
console.log(str5.slice(1, 5)); // Output: ello
console.log(str5.slice(-6, -1)); // Output: World (negative indices are counted from the end of the string)

//String methods
let str = "Hello, World!";
let str2 = "   Hello, World!   ";
console.log(str.length); // Output: 13
console.log(str.toUpperCase()); // Output: HELLO, WORLD!
console.log(str.toLowerCase()); // Output: hello, world!
console.log(str.includes("World")); // Output: true
console.log(str.includes("world")); // Output: false (case-sensitive)
console.log(str.indexOf("o")); // Output: 4
console.log(str.slice(0, 5)); // Output: Hello
console.log(str.replace("World", "JavaScript")); // Output: Hello, JavaScript!
console.log(str2.trim()); // Output: Hello, World!
console.log(str2.trimStart()); // Output: Hello, World!
console.log(str2.trimEnd()); // Output:    Hello, World!
console.log(str.split(", ")); // Output: [ 'Hello', 'World!' ]
console.log(str.charAt(0)); // Output: H
console.log(str.at(0)); // Output: H
console.log(str.charCodeAt(0)); // Output: 72 [ASCII code for 'H']
console.log(str.endsWith("!")); // Output: true
console.log(str.startsWith("Hello")); // Output: true
console.log(str.match(/o/g)); // Output: [ 'o', 'o' ]
console.log(str.repeat(2)); // Output: Hello, World!Hello, World!
console.log(str.search("World")); // Output: 7
console.log(str.substring(0, 5)); // Output: Hello
console.log(str.valueOf()); // Output: Hello, World!

//All methods of strings are as follows
// charAt()
// charCodeAt()
// concat()
// endsWith()
// includes()
// indexOf()
// lastIndexOf()
// match()
// repeat()
// replace()
// search()
// slice()
// split()
// startsWith()
// substring()
// toLowerCase()
// toUpperCase()
// trim()
// valueOf()
