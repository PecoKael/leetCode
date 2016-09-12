/*
 * Given an integer, write a function to determine if it is a power of two.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n == 0) return false;
    while (n) {
        if (n == 1) break;
        if (n & 1) return false;
        n >>= 1;
    }
    return true;
};
