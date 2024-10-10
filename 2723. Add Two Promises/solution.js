/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */

var addTwoPromises = async function(promise1, promise2) {
    return new Promise(async (resolve) => {
        const nums = await Promise.all([promise1, promise2]);
        resolve(nums.reduce((acc, curr) => curr + acc));
    });
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2))
   .then(console.log); // 4