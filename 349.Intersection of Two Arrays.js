/*
 *Given two arrays, write a function to compute their intersection.
 *Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var res = [];
    for (var x in nums2){
        console.log(nums2[x]);
    }
    nums2.map(function(num){
        if(nums1.indexOf(num) > -1 && res.indexOf(num) == -1){
            res.push(num);
        }   
    });
    return res; 
};