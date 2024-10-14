/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */


var flat = function (arr, n) {
    const result = [];
    function flatten(arr, depth) {
        for(const value of arr) {
            if(typeof(value) === 'object' && depth < n) {
                flatten(value, depth + 1);
            }else{
                result.push(value);
            }
        }
        return result;

    }
    return flatten(arr, 0);
};

let arr = [1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]];

console.log(flat(arr, 2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]