// Immediately Invoked Function Expression (IIFE)
console.log("[1] Immediately Invoked Function Expression (IIFE)");
const result = function(a, b) {
    const sum = a + b;
    return sum;
}(3, 4); // will be called on declaration and returns sum type of result is a number not a function
console.log(`result type is ${typeof(result)} not a function because function is called on declaration`);
console.log(result); // 7 

// function hosting

console.log("\n[2] Function Hosting");

console.log(add(2, 3)); 5

function add(a, b) {
    return a + b;
}

// Closures

console.log("\n[3] Closures");

function createAdder(a) {
    function f(b) {
        // function f has it`s own reference to 'a' outer argument
        const sum = a + b;
        return sum;
    }
    return f;
}
const f1 = createAdder(3);
console.log(f1(4)); // 7
const f2 = createAdder(8);
console.log(f2(4)); // 12

// Spread Operator & Rest Arguments
    // example |
console.log("\n[4] Spread Operator & Rest Arguments");
const a = [0, 1, 2];
const b = [3,4,5];
const c = [...a, ...b];

console.log(c); // [0, 1, 2, 3, 4, 5]
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    // example ||
function fun(...args) {
    console.log(args[0], args[1]);
}
fun(1, 2, 3); // 1, 2

// high order function
/* a function that accepts 
 a function and/or returns a function is called a higher-order function */

console.log("\n[5] High Order Function");

function log(inputFunction) {
    return function(...args) {
        console.log("Input", args);
        const result = inputFunction(...args);
        console.log("Output", result);
        return result;
    }
}
const f = log((a, b) => a + b);
f(1, 2); // Logs: Input [1, 2] Output 3

// differences between arrow syntax and function syntax.


console.log("\n[6] Arrow Function Differences");
/* [1] No automatic hoisting. You are only allowed to use the function after it was declared.
 This is generally considered a good thing for readability. */
let x = subtract(10, 5); // ReferenceError: Cannot access 'subtract' before initialization unlike function syntax.
const subtract = (a, b) => a - b;
/* [2] Can't be bound to this, super, and arguments 
  or be used as a constructor. 
  These are all complex topics in themselves
   but the basic takeaway should be that arrow functions are simpler in their feature set */

/* [3] More minimalistic syntax. This is especially true for anonymous functions and single-line functions. For this reason,
 this way is generally preferred when passing short anonymous functions to other functions. */