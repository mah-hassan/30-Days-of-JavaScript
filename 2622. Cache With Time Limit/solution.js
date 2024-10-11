class TimeLimitedCache
{
    cache = new Map();
    
    /** 
     * @param {number} key
     * @param {number} value
     * @param {number} duration time until expiration in ms
     * @return {boolean} if un-expired key already existed
    */
    set(key, value, duration) {
        const entry = this.cache.get(key);
        if(entry)
        {
            clearTimeout(entry.timeoutId); 
        }
        const timeoutId = setTimeout(() => this.cache.delete(key), duration);
        this.cache.set(key, { value, timeoutId });
        return Boolean(entry); 
    };

    /** 
     * @param {number} key
     * @return {number} value associated with key
    */
    get(key) {
        const entry = this.cache.get(key);
        if(entry)
        {
            return entry.value;
        }
        return -1;
    };

    /** 
     * @return {number} count of non-expired keys
    */
    count() {
        return this.cache.size;
    };
}






const timeLimitedCache = new TimeLimitedCache()
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1
setTimeout(() => {
    console.log("After Key has Expired");
    console.log(timeLimitedCache.get(1)); // 42
    console.log(timeLimitedCache.count()); // 1

}, 1020);