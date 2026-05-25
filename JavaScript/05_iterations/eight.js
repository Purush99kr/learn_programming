// Array.reduce() :

const array1 = [1, 2, 3, 4, 5, 6, 7];

//0+1+2+3+4+5+6+7
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

// console.log(sumWithInitial); //output : 28

//In this reduce function, accumulator at first takes value of initialVale and then further takes from the sum
//currentValue conatins the actual vale of array1 : [1, 2, 3, 4, 5, 6, 7]

// +++++++++++++++++{ functional examples using reduce }+++++++++++++++++++++++
const myArray = [1, 2, 3, 4];

// let result = myArray.reduce(function (acc, curr) {
//   console.log(`acc : ${acc} , curr : ${curr}`);
//   return acc + curr;
// }, 0);

let result = myArray.reduce((acc, curr) => acc + curr, 0); //arrow function version of above code

console.log("Function result:", result);

//++++++++++++++++++++++++{ shopping cart scenario : Adding total amount }++++++++++++++++++++++++

const shoppingCart = [
  { item: "Laptop", price: 1000 },
  { item: "Phone", price: 500 },
  { item: "Headphones", price: 200 },
];

const totalAmount = shoppingCart.reduce((acc, curr) => acc + curr.price, 0);
console.log("shopping cart Total amount:", totalAmount); //output : 1700
