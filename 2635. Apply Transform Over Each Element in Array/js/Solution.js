/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = (arr, fn) => {
    let myArr = [];
    arr.forEach((n,i) => {
        myArr[i] = fn(n, i);
    });
    return myArr;   
};