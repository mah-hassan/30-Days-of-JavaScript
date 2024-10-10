/*
* Promises In JavaScript
* A Promise is an object that represents the eventual completion or failure of an asynchronous task.
 It is essentially a placeholder for a value that will be known in the future.
* It has tree distinct states: pending, fulfilled, and rejected.
* The Promise constructor takes a function as an argument.
 This function is called with two other functions as arguments one for success and one for rejection.
*/

/*
 * This function creates a new Promise that simulates a connection attempt.
 * The Promise resolves with a boolean value indicating the success of the connection attempt.
 * If the connection attempt takes longer than 1 second, the Promise rejects with an error message.
 */

const myPromise = new Promise((resolve, reject) => {
    const n = Math.random() * (3.0 - 0.0) + 0.0;
    console.log(`connection attempt: ${n}`);
    setTimeout(() => {
        if (n < 0.5) {
            resolve(true);
        } else if (n < 1.0 && n > 0.5) {
            resolve(false);
        } else {
            reject(Error("connection time out"));
        }
    }, 1000);
});

myPromise
    .then((val) => console.log(`connection: ${val ? "success" : "failed"}`)) // when promise is resolved
    .catch((error) => console.log(error))  // when promise is rejected
    .finally(() => console.log(`connection finished at ${new Date().toUTCString()}`)); // executes after no matter the promise was resolved or rejected


// How to get the resolved value of a promise.

myPromise.then((val) => console.log(`resolved value using then(): ${val}`));
// Get the resolved value of a promise by awaiting it but await must be within an async function

(async () => {
    try {
        const val = await myPromise;
        console.log(`resolved value by awaiting the promise: ${val}`);    
    }catch (error) {
        console.log(`Error: ${error}`);
    }
    // await Promise.all([myPromise]); this how to await more than one promise.
})();