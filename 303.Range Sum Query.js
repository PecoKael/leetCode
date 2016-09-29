// Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.


/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;  
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    var sum  = 0;
    for(var k = i; k <= j; k++ ){
        sum += this.nums[k];
    }
    return sum;
};



var a = [-2, 0, 3, -5, 2, -1];
var numArray = new NumArray(a);
numArray.sumRange(0,2);
/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */
