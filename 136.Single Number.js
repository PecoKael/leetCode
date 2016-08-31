/*
 * Given an array of integers, every element appears twice except for one. Find that single one.
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var num = nums.sort();
    for (var i = 0; i < nums.length;i+=2 ){
        if (nums[i] != nums[i+1]){
            return nums[i];
        }
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce(function(pre, cur) {
        return pre ^ cur;
    });
};