const userEmailId = "user@example.com"; // assigning Using const for a value that won't change
let userName = "Nikhil Singh"; // assigning Using let for a value that might change in the future
let userAge = 30;
userCity = "Amritsar";
let userState;

/* Recommended to not use VAR for variable declaration in modern JavaScript due to its function scope and hoisting behavior, which can lead to unexpected results. Instead, use LET or CONST for better readability and maintainability of your code.*/

/*userEmailId = "newuser@example.com"; // This will throw an error because userEmailId is declared with const */
userName = "Singh ji"; // This is allowed because userName is declared with let
userAge = 31; // This is also allowed because userAge is declared with let
userCity = "New Delhi"; // This is allowed but not recommended because userCity is not declared with var, let, or const

console.log("Email ID:", userEmailId);

console.table({ userEmailId, userName, userAge, userCity, userState }); // Using console.table to display variables in a tabular format
