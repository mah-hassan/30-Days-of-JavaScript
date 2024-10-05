// Closures VS Classes
var counterBuilder = function(n)
{
    return function(){ return n++; };
};
const counter = counterBuilder(10);
console.log(typeof(counter));
console.log(`Closure output1: ${counter()}`); // Outputs: 10
console.log(`Closure output2: ${counter()}`); // Outputs: 11

class Counter
{
    constructor(n)
    {
        this.n = n;
    }
    increment()
    {
        return this.n++;
    }
}
var counter2 = new Counter(10);

console.log(`Class output1: ${counter2.increment()}`); // Outputs: 10
console.log(`Class output1: ${counter2.increment()}`); // Outputs: 11
// however both function the same way but closures allows for true encapsulation as you can not have any access to the inner state 
// unlike class nothing preventing you from doing this counter2.n = 20;
/* another difference is storing functions in memory
    in classes each instance stores a reference to function prototype
    whereas for closures, all the "methods" are generated and a "copy" of each is stored in memory each time the outer function is called.
*/