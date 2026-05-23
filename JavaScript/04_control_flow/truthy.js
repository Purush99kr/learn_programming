//for some values sysytem assumes that such values are true or false without proper verifications.
// for example

const userEmail = "User@13@gmail.com";
if (userEmail) {
  console.log(`We have the user Eail as: ${userEmail}`);
} else {
  console.log("Enter the email");
}

// Here we are not verifying the email from any information still we are getting true value, if we pass empty string or array then also we get the same value with empty email as listed below.

const userEmail1 = " ";
if (userEmail1) {
  console.log(`We have the user StringEail1 as: ${userEmail1}`); // same output with empty email
} else {
  console.log("Enter the email");
}

const userEmail2 = [];
if (userEmail2) {
  console.log(`We have the user ArrayEail as: ${userEmail2}`); // same output with empty email
} else {
  console.log("Enter the email");
}

// following are the value which belongs to this truthy falsy concepts

// Values which are considered to be false always
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Values which are considered to be true always
//"0", " ", [], "false", "null", {}, function(){}

//false == 0 : true
//false == "" : true
//0 == "" : true

//finding or handing array and objects with conditions

if (userEmail2.length === 0) {
  console.log("Array is empty");
}

//Object.keys(emptyObj) : is now tranformmed into an array, we can apply length properties to control
const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

//Nullish Coalescing Opertor (??) : Only check with null and undefined
let val1;
// val1 = 5 ?? 20;
// val1 = null ?? 20;
val1 = undefined ?? 30;

console.log(val1);

//Terniary Operator
// Syntax : Condition ? true : false

const age = 34;
age >= 18
  ? console.log("Adult : Have permit to drive and vote")
  : console.log("Minor age : permission denied");
