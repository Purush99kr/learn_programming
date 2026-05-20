// Immediateky Invoked Function Expression

//without iife syntax, normal function
function connectDB() {
  console.log(`DB CONNECTED without IIFE`);
}
connectDB(); //function executed

//Sometimes we need to save our function from the pollution of global scope, so we write IIFE
//IIFE syntax -> ()(): (Function definitions wrapped)(Function Execution)
(function connectDB() {
  console.log(`DB CONNECTED with IIFE : It is named IIFE`);
})(); //function executed, just after definition. In order to stop this function we need to add ';' explicitly.

//IIFE using Arrow function
((name) => {
  console.log(
    `DB CONNECTED with IIFE and by Arrow Fn, congrats ${name} : Unnammed IIFE`,
  );
})("Nikhil");
