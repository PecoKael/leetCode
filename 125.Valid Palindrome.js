// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// For example,
// "A man, a plan, a canal: Panama" is a palindrome.
// "race a car" is not a palindrome.
 


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var arr = s.match(/[a-zA-Z0-9]/g);
    if(arr == null){
        return true;
    }
    arr = arr.map(function(element){
        return element.toLowerCase();
    });
    for(var i = 0; i < (arr.length / 2); i++){
        if(arr[i] != arr[arr.length - 1- i]){
            return false;
        }
    }
    return true;
};
console.log(isPalindrome("0P"))