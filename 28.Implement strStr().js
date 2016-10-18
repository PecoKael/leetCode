// Implement strStr().
//
// Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var len = needle.length;
    for (var i = 0; i < haystack.length - len + 1; i++) {
        if (haystack.slice(i, i + len) == needle) {
            return i;
        }
    }
    return -1;
};
console.log(strStr('lingjianmiao', 'jian'));
