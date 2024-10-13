/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const groups = {};
    for(const item of this)
    {
        const key = fn(item);
        groups[key] = groups[key] || []; // if key is undefined then groups[key] will be empty array 
        // otherwise groups[key] will remain as it is
        groups[key].push(item);
    }           
    return groups;
};


console.log([1,2,3].groupBy(String)); // {"1":[1],"2":[2],"3":[3]}
