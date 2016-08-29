/*
 * Write a function that takes a string as input and returns the string reversed.
 * Example:
 * Given s = "hello", return "olleh".
 * Subscribe to see which companies asked this question
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    return s.split("").reverse().join("");
};

/**
 * @param {string} s
 * @return {string} string
 */
var reverseString = function(s) {
    var i = s.length;
    var string = '';
    while(i-- >= 0 ){
     string += s.charAt(i);
    }
    return string;
};