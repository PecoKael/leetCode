/*
 *Write an algorithm to determine if a number is "happy".
 *A happy number is a number defined by the following process: 
 *Starting with any positive integer, replace the number by the sum of the squares of its digits, 
 *and repeat the process until the number equals 1 (where it will stay), 
 *or it loops endlessly in a cycle which does not include 1. 
 *Those numbers for which this process ends in 1 are happy numbers.
 *Example: 19 is a happy number
	12 + 92 = 82
	82 + 22 = 68
	62 + 82 = 100
	12 + 02 + 02 = 1
 *
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var sum = 0;
    while(n !== 1 && n !== 7){
    	sum = 0;
    	while ((n / 10) != 0) {
	        var dig = n % 10;
	        sum += dig*dig;
	        n = ~~(n / 10);
    	}
    	n = sum;
    }
   	return true;
};

