//Functions in javascript are reusable blocks of code that perform a specific task. They can take input parameters, perform operations, and return output. Functions help in organizing code, improving readability, and promoting code reusability.
//Difference between function definition and function declaration
// Function declaration is a way to define a function using the function keyword, followed by the function name and parameters. It is hoisted, meaning it can be called before its declaration in the code.
// Function definition is the actual implementation of the function, where you write the code that performs the desired task. It can be done using function expressions or arrow functions, and it is not hoisted, meaning it cannot be called before its definition in the code.

// Function declaration
function addTwoNumbers(a, b) {} // a, b are parameters, they are placeholders for the values that will be passed when the function is called. They are used to define the inputs that the function can accept and work with. When the function is called, you can provide arguments (actual values) for these parameters, and the function will use those values to perform its operations.

//function definition
function addTwoNumbers(a, b) {
  console.log(a + b);
}

//Function reference
console.log(addTwoNumbers); // output: [Function: addTwoNumbers], This will log the function definition

//Function execution
addTwoNumbers(5, 10); // Here, 5 and 10 are arguments, they are the actual values that are passed to the function when it is called. They correspond to the parameters defined in the function declaration. In this case, 5 will be assigned to parameter a and 10 will be assigned to parameter b, allowing the function to perform its operation using these values.

//More examples
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Nikhil"); // This will execute the function and log "Hello, Nikhil!"

// Function with return statement
function add(a, b) {
  let result = a + b;
  return result;
}

let result = add(4, 9); //this result is different from the result variable inside the function, Scope concept.
console.log(result); // This will log 13, which is the result of adding 4 and 9.

//Another method of returning a value from a function, without using variables.
function multiply(a, b) {
  return a * b;
}

multiply(5, 6); // This will return 30, which is the result of multiplying 5 and 6, but it will not log anything to the console because we are not using console.log() to display the result.
console.log(multiply(5, 6)); // This will log 30, which is the result of multiplying 5 and 6.
let product = multiply(5, 6);
console.log(product); // This will log 30, which is the result of multiplying 5 and 6.

//More Examples

function userLoginMessage(username = "Guest") {
  if (!username) {
    return "Please provide a username.";
  }
  return `Welcome back, ${username}!`;
}
userLoginMessage("Nikhil"); // This will return "Welcome back, Nikhil!", but it will not log anything to the console because we are not using console.log() to display the result.
console.log(userLoginMessage("Nikhil")); // This will log "Welcome back, Nikhil!" to the console.
console.log(userLoginMessage()); // This will log "Please provide a username." to the console.When we remove the 'Guest' default value from the function definition parameter.
