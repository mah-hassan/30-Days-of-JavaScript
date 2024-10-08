/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var filter = function(arr, fn) {
    const result = [];
    for(let i = 0; i < arr.length; i++)
    {
        if(fn(arr[i], i))
            result.push(arr[i]);
    }
    return result;
};

let arr = [1, 2, 3, 4, 5];

const fn = (n) => n % 2 === 0;

console.log(filter(arr, fn)); // [2, 4]