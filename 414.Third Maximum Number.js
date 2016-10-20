// Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

/**
 * @param {number[]} nums
 * @return {number}
 */
var unique = function(a)
{
	var n = [];
	for(var i = 0; i < a.length; i++)
	{
		if (n.indexOf(a[i]) == -1) n.push(a[i]);
	}
	return n;
}
var thirdMax = function(nums) {
	var a =  nums.sort(function(a, b) {
		return b - a;
	});
    var b = unique(a);
    return b[2] == undefined ? b[0] : b[2];
};
console.log(thirdMax([2, 2, 3, 1]));
