//array in javascript.... heap memory allocates for array and reference is stored in stack memory
//array is a data structure that can hold multiple values in a single variable
//array is a collection of elements that can be of any data type
//array is an ordered collection of elements
//array is a zero-based indexed collection of elements

//creating an array
let fruits = ["apple", "banana", "orange"];
console.log(fruits); //output: ["apple", "banana", "orange"]

const arr = new Array(1, 2, 3);
console.log(arr); //output: [1, 2, 3]

//accessing elements in an array
console.log(fruits[0]); //output: "apple"
console.log(fruits[1]); //output: "banana"
console.log(fruits[2]); //output: "orange"

//modifying elements in an array
fruits[0] = "grape";
console.log(fruits); //output: ["grape", "banana", "orange"]

//array methods
//push() - adds an element to the end of the array
fruits.push("kiwi");
console.log(fruits); //output: ["grape", "banana", "orange", "kiwi"]
//pop() - removes the last element from the array
fruits.pop();
console.log(fruits); //output: ["grape", "banana", "orange"]
//shift() - removes the first element from the array
fruits.shift();
console.log(fruits); //output: ["banana", "orange"]
//unshift() - adds an element to the beginning of the array
fruits.unshift("mango");
console.log(fruits); //output: ["mango", "banana", "orange"]
