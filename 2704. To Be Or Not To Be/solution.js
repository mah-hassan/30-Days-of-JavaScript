/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    const toBe = function(val2)
    {
        if(val === val2)
            return true;
        else
            throw new Error("Not Equal");
    };  
    const notToBe = function(val2)
    {
        if(val !== val2)
            return true;
        else
            throw new Error("Equal");
    };
    return { toBe, notToBe };
};
console.log(expect(5).toBe(5));
console.log(expect(5).notToBee(5));

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */