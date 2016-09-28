/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var s = String(x);
    for(var i = 0; i < (s.length / 2);i++){
        if(s[i] != s[s.length-1-i]){

            return false;
        }
    }
    return true;
};
