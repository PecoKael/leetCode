// Given an array of integers A and let n to be its length.
//
// Assume Bk to be an array obtained by rotating the array A k positions clock-wise, we define a "rotation function" F on A as follow:
//
// F(k) = 0 * Bk[0] + 1 * Bk[1] + ... + (n-1) * Bk[n-1].
//
// Calculate the maximum value of F(0), F(1), ..., F(n-1).

/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
	var n = A.length;
	if (n == 0) {
		return 0;
	}if(n == 1){
	    return 0;
	}
	var sum = [];
	var count = -1;
	for (var i = 0; i < n; i++) {
		A.push(A.shift());
		var tempSum = 0;
		for (var j = 0; j < n; j++) {
			tempSum += A[j] * j;
		}
		sum.push(tempSum);
	}
	return Math.max.apply(null,sum);
};
console.log(maxRotateFunction([1,2,3,4,5,6,7,8,9,10]));
