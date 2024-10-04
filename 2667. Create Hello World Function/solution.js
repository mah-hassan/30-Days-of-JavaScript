var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
    }
};


const f = createHelloWorld();

let s = f();
console.log(typeof(createHelloWorld)); // function
console.log(typeof(f)); // function
console.log(typeof(s)); // string

console.log(f); // prints [Function (anonymous)]

console.log(s); // prints "Hello World"


