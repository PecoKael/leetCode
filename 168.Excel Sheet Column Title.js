/*
 * Given a positive integer, return its corresponding column title as appear in an Excel sheet.
 *  1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB
 * 
 */

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var result = '';
    var code = 65; 
    while (n) {
        result = String.fromCharCode((n - 1) % 26 + code) + result;
        n = ~~((n - 1) / 26);
    }
    return result;
};
