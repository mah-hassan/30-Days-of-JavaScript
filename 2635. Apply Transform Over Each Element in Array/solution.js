/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const result = [];
    for(const i in arr)
    {
        result[i] = fn(arr[i], Number(i));
    };
    return result;
};

let arr = [1, 2, 3, 4, 5];
const fn = (n) => n + 1;
console.log(map(arr, fn)); // [2, 3, 4, 5, 6]