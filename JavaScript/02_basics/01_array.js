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

//Join() - joins all elements of an array into a string
let fruitsString = fruits.join(", ");
console.log(fruitsString); //output: "mango, banana, orange"

//Slice() - returns a shallow copy of a portion of an array into a new array object
let citrusFruits = fruits.slice(1, 3);
console.log(citrusFruits); //output: ["banana", "orange"]

//Splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
fruits.splice(1, 1, "pear");
console.log(fruits); //output: ["mango", "pear", "orange"]

//length - returns the number of elements in an array
console.log(fruits.length); //output: 3

//indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present
console.log(fruits.indexOf("pear")); //output: 1
console.log(fruits.indexOf("banana")); //output: -1

//includes() - determines whether an array includes a certain value among its entries, returning true or false as appropriate
console.log(fruits.includes("orange")); //output: true
console.log(fruits.includes("banana")); //output: false

//concat() - is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array
let moreFruits = ["strawberry", "blueberry"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); //output: ["mango", "pear", "orange", "strawberry", "blueberry"]

//sort() - sorts the elements of an array in place and returns the sorted array
allFruits.sort();
console.log(allFruits); //output: ["blueberry", "mango", "orange", "pear", "strawberry"]

//reverse() - reverses the order of the elements of an array in place and returns the reversed array
allFruits.reverse();
console.log(allFruits); //output: ["strawberry", "pear", "orange", "mango", "blueberry"]

//map() - creates a new array populated with the results of calling a provided function on every element in the calling array
let upperCaseFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperCaseFruits); //output: ["MANGO", "PEAR", "ORANGE"]

//filter() - creates a new array with all elements that pass the test implemented by the provided function
let longFruits = fruits.filter((fruit) => fruit.length > 5);
console.log(longFruits); //output: ["orange"]

//reduce() - executes a reducer function (that you provide) on each element of the array, resulting in a single output value
let totalLength = fruits.reduce(
  (accumulator, fruit) => accumulator + fruit.length,
  0,
);
console.log(totalLength); //output: 16

//forEach() - executes a provided function once for each array element
fruits.forEach((fruit) => console.log(fruit)); //output: "mango", "pear", "orange"

//find() - returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned
let foundFruit = fruits.find((fruit) => fruit.startsWith("p"));
console.log(foundFruit); //output: "pear"

//findIndex() - returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1
let foundIndex = fruits.findIndex((fruit) => fruit.startsWith("p"));
console.log(foundIndex); //output: 1

//array holds multiple inputs of different data types
let marvel_heroes = ["Ironman", "Captain America", "Thor"];
let dc_heroes = ["Batman", "Superman", "Wonder"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes); //output: ["Ironman", "Captain America", "Thor", ["Batman", "Superman", "Wonder"]]
// console.log(marvel_heroes[3]); //output: ["Batman", "Superman", "Wonder"]
// console.log(marvel_heroes[3][0]); //output: "Batman"

//Spread operator - allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected
let all_heroes = [...marvel_heroes, ...dc_heroes];
console.log("NEW", all_heroes); //output: ["Ironman", "Captain America", "Thor", "Batman", "Superman", "Wonder"]

//Flat method - creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
let nestedArray = [1, 2, [3, 4, [5, 6]]];
let flatArray = nestedArray.flat(2); // flat(infinity)
console.log(flatArray); //output: [1, 2, 3, 4, 5, 6]

//Array.isArray() - determines whether the passed value is an Array
console.log(Array.isArray(fruits)); //output: true
console.log(Array.isArray("not an array")); //output: false

//Array.from() - creates a new, shallow-copied Array instance from an array-like or iterable object[converting into array]
let fromArray = Array.from("hello");
console.log(fromArray); //output: ["h", "e", "l", "l", "o"]
console.log(Array.from({ name: "Nikhil" })); // Interesting Case, we need to change one by one.

//Array.of() - creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments
let score1 = 100;
let score2 = 200;
let score3 = 300;
let scores = Array.of(score1, score2, score3);
console.log(scores); //output: [100, 200, 300]
