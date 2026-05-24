//special javascript loops for array and objects destructuring

// for of loop
// this doesn't need loop termination logic, automatically detect and pront te exact value length

//array example
let arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  //   console.log(`Index is: ${num}`);
}

//string example
let greetings = "Nikhil Kumar";
for (const greet of greetings) {
  //   console.log(`Name Destructuring: ${greet}`);
}

//Maps loop example : unique value, no duplicates, FIFO, an object
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");
// console.log(map);

for (const [key, value] of map) {
  //   console.log(key + "-" + value);
}

//object example : not iterable using 'for of' loop
let obj = {
  userName: {
    firstName: "Nikhil",
    lastName: "Kumar",
  },
  age: 24,
  homeTown: "Bihar",
};
for (const [key, value] of obj2) {
  console.log(key, value);
}
