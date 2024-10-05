/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const intialState = init;
    return {
        increment: () => ++init,
        decrement: () => --init,
        reset: () => {
            init = intialState
            return init;
        }
    }
};


class Counter 
{
    constructor(init) {
        this.count = init;
        this.init = init;
    }
    increment() { return ++this.count; }
    decrement() { return --this.count; }
    reset() {
        this.count = this.init;
        return this.count;
    }

};
const counter = createCounter(5);
// const counter = new Counter(5); // second solution
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

