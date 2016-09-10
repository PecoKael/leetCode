/*
 *Given a column title as appear in an Excel sheet, return its corresponding column number.
 */

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    s = s.split('').reverse();
    var sum = 0;
    s.forEach(function(item,index){
        sum += (item.charCodeAt()-64) * Math.pow(26,index);
    });
    return sum;
};
