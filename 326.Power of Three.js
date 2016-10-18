// Given an integer, write a function to determine if it is a power of three.

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    var res = Math.log10(n)/Math.log10(3);
    return (res%1) === 0 ? true : false;
};