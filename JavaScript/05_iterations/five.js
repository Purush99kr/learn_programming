// 'ForEach' loop : we use loop to extract value
// array.forEach(element => {});

//this loop takes 'call back function', Call back fn: the function without name.

//normal functions
let heros = ["IronMan", "Captain America", "Thor", "Loki"];
heros.forEach(function (val) {
  //   console.log(val);
});

//arrow function
let arr = ["IronMan", "Captain America", "Thor", "Loki"];
arr.forEach((val) => {
  //   console.log(val);
});

//passing initially declared function
function hero(val) {
  //   console.log(val);
}
arr.forEach(hero);

//complete forEach
heros.forEach((item, index, arr) => {
  //   console.log(item, index, arr);
});

// +++++++++++++++++++++++++++++++++++{ objects concepts }++++++++++++++++++++++++++++++++++

// [ {}, {}, {}] : backend data destructring concepts
let coding = [
  {
    languageName: "JavaScript",
    languageFileName: "Js",
  },
  {
    languageName: "python",
    languageFileName: "Py",
  },
  {
    languageName: "Java",
    languageFileName: "Java",
  },
];

coding.forEach((item) => {
  //   console.log(item);
  //   console.log(item.languageName);
  //   console.log(item.languageFileName);
});
// ++++++++++++++++++++++++++++++++++++++{ objects concepts ended }+++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++++++++++++++++++++++++{ Filter COncepts }+++++++++++++++++++++++++++++++++++++++++

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNum = num.forEach((item) => {
  //   console.log(item);
  return item; // forEach loop is not returning any type of value, it only print the value
});
// console.log(newNum);

//To get rid from all these concepts, we use filter concepts which returns the value. We can store its return value and can use as per thr requirements.

// const newNum2 = num.filter((item) => item > 4);  // normal filter logic
const newNum2 = num.filter((item) => {
  return item > 4;
}); // arrow function, use return keyword
console.log("Arrow Function: ", newNum2);

//using foreach for the same filter concept, over num array

const myNum = [];

num.forEach((item) => {
  if (item > 4) {
    myNum.push(item);
  }
});
console.log("ForEach: ", myNum);

// ++++++++++++++++++++++++++++++++++++++{ Filter COncepts Ended }+++++++++++++++++++++++++++++++++++++++++
