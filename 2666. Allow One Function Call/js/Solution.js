/**
 * @param {Function} fn
 * @return {Function}
 */
const once = (fx) => {
    let first = true;
    return (...args) => {
        return (first) ? (first=false, fx(...args)) : undefined;
    };
};
/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */