/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */

var join = function(arr1, arr2) {

    // arr1.sort((a, b) => a.id - b.id);
    // arr2.sort((a, b) => a.id - b.id);
    // const joinedArray = [];
    // let i = 0;
    // let j = 0;
    // while (i < arr1.length && j < arr2.length) {
    //     if(arr1[i].id === arr2[j].id) {
    //         joinedArray.push({...arr1[i], ...arr2[j]});
    //         i++;
    //         j++;
    //         continue;
    //     }else if(arr1[i].id > arr2[j].id) {
    //         joinedArray.push({...arr2[j]});
    //         j++;
    //         continue;
    //     }
    //     joinedArray.push({...arr1[i]});
    //     i++;
    // }
    // while(i < arr1.length) {
    //     joinedArray.push({...arr1[i]});
    //     i++;
    // }
    // while(j < arr2.length) {
    //     joinedArray.push({...arr2[j]});
    //     j++;
    // }
    // return joinedArray;


    const joinedArray = {};
    for (let i = 0; i < arr1.length; i++){
        joinedArray[arr1[i].id] = {...arr1[i]};
    }
    for (let i = 0; i < arr2.length; i++){
        if (joinedArray[arr2[i].id]) {
            joinedArray[arr2[i].id] = {...joinedArray[arr2[i].id],...arr2[i]};
            continue;
        }
        joinedArray[arr2[i].id] = {...arr2[i]};
    }
    return Object.values(joinedArray);
};