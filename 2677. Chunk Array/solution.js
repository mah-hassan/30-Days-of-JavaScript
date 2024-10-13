/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */

var chunk = function(arr, size) {
    const result = [];
    // using array.slice
    // for(let i = 0; i < arr.length; i += size)
    //     result.push(arr.slice(i, i + size));



    let subarray = [];
    for(let i = 0; i < arr.length; i++)
    {
        subarray.push(arr[i]);
        if(subarray.length === size)
        {
            result.push(subarray);
            subarray = [];
        }
    }
    if(subarray.length > 0)
        result.push(subarray);

    return result;
};
