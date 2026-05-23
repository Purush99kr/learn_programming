//control Flow Statement in JavaScript
// conditons : >, <, >=, <=, =, ==, ===, !=, !==, !===, ? : ,
// If : in order to execute the condition should be true.
// if (condition) {
// }

//netsed if
// if (condition1) {

//     if (condition2) {
//         // code
//     }
//     else if (condition3) {
//         // code
//     }
//     else {
//         // code
//     }

// }
// else {
//     // code
// }

//example
// let a = 3;
// if (a == 5) {
//   console.log("If Statement is Executed");
// } else {
//   console.log("No execution");
// }

// if (a == 4) {
//   console.log("False Condition, No Execution");
// } else {
//   console.log("False Condition");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  if (loggedInFromEmail) {
    console.log("Allow User to buy courses");
  }
} else {
  console.log("Invalid user");
}
