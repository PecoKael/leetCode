// Given an integer, write an algorithm to convert it to hexadecimal. For negative integer, two’s complement method is used.

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    return [...'76543210'].map(x => '0123456789abcdef'[(num >>> (x * 4)) & 15]).join('').replace(/^0+(?!$)/g, '');
};
