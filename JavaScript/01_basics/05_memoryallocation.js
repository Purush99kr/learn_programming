//Method of memory allocation in JavaScript. (STACK and HEAP)
//In JavaScript, memory allocation is handled automatically by the JavaScript engine. When you create variables, objects, or functions, the engine allocates memory for them on the heap. The memory is managed through a process called garbage collection, which automatically frees up memory that is no longer in use.

//There are two types of memory allocation in JavaScript: stack and heap. The stack is used for storing primitive values (such as numbers, strings, and booleans) and function calls, while the heap (Non-Primitive) is used for storing objects and functions.

//Stack -> We receive a copy of the value when we assign a primitive value to a variable or pass it as an argument to a function. This means that changes made to one variable do not affect the other variable, as they are stored in different memory locations on the stack.
let a = 10;
let b = a;
b = 20;
console.log(a); // Output: 10
console.log(b); // Output: 20
//Heap -> When we assign an object to a variable or pass it as an argument to a function, we receive a reference to the memory location where the object is stored on the heap. This means that changes made to one variable will affect the other variable, as they both reference the same memory location.
let obj1 = { name: "Alice" };
let obj2 = obj1;
obj2.name = "Bob";
console.log(obj1.name); // Output: "Bob"
console.log(obj2.name); // Output: "Bob"

//For example, when you create a variable and assign it a value, memory is allocated for that variable:
let myVariable = "Hello, World!";
//In this case, memory is allocated for the string "Hello, World!" and the variable myVariable holds a reference to that memory location.
//When you create an object, memory is allocated for that object and its properties:
let myObject = {
  name: "John",
  age: 30,
};
//In this case, memory is allocated for the object and its properties (name and age). The variable myObject holds a reference to that memory location.
//When you create a function, memory is allocated for that function and its parameters:
let myFunction = function () {
  // Function body
};
//In this case, memory is allocated for the function and its parameters. The variable myFunction holds a reference to that memory location.
//Overall, memory allocation in JavaScript is handled automatically, and developers do not need to manually manage memory. However, it is important to be mindful of memory usage and avoid creating unnecessary variables or objects that can lead to memory leaks.
