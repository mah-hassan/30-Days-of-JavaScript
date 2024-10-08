/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let result = init;
    for(const n of nums)
    {
        result = fn(result, n);
    }
    return result;
};

const nums = [1, 2, 3, 4, 5];

const fn = (acc, curr) => acc + curr;

console.log(reduce(nums, fn, 0)); // Output: 15