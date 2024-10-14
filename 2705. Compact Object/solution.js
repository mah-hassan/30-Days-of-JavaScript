/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */

var compactObject = function(obj) {
    // function compact(current){
    //     if(Array.isArray(current)){
    //         return current.reduce((acc, curr) => {
    //             const compactedItem = compact(curr);
    //             if(Boolean(compactedItem))
    //                 acc.push(compactedItem);
    //             return acc;
    //         }, []);

    //     }else if(typeof(current) === "object" && current !== null) {
    //         return Object.keys(current).reduce((acc, key) => {
    //             const compactedItem = compact(current[key]);
    //             if(Boolean(compactedItem))
    //                 acc[key] = compactedItem;
    //             return acc;
    //         },{});
    //     }else{
    //         return current;
    //     }
    // }
    
    // return compact(obj);

    const result = {};
 
    if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
    else if(typeof(obj) === "object" && obj !== null)
    {
        for(const key in obj){
            const compactedItem = compactObject(obj[key]);
            if(Boolean(compactedItem))
                result[key] = compactedItem;
        }
    }else{
        return obj;
    }

    return result;
};

const  obj = {"a": null, "b": [false,true, 1]};

console.log(compactObject(obj)); // [1]