/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise(async (resolve, reject) => {
        const results = new Array(functions.length);
        if (functions.length === 0)
        {
            resolve(results);
            return;
        }
        let completed = 0;
        functions.forEach(async (func, index) => {
            try
            {
                results[index] = await func();
                // console.log(index); 
                // 1 is printed first as it takes 100ms to complete then 0 is printed ass it takes 200ms.
                // but final result will be in the correct order 0 then 1.
                completed++;
                if (completed === functions.length)
                    resolve(results);
            }
            catch (error)
            {
                reject(error)
            }
        }); 
    });
};

const promise = promiseAll([() => new Promise(resolve => setTimeout(() => resolve(1), 200)), () => new Promise((resolve, reject) => setTimeout(() => resolve(2), 100))]);
promise.then(console.log); 