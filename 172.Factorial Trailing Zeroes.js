
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    // console.log(parseInt(n/5));
     return n == 0 ? 0 : parseInt(n / 5) + trailingZeroes(parseInt(n / 5));
};
console.log(trailingZeroes(30));