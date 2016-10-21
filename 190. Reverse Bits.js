// Reverse bits of a given 32 bits unsigned integer.
//
// For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), return 964176192 (represented in binary as 00111001011110000010100101000000).


/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
     var s =  n.toString(2);
	 while(s.length != 32){
		 s = '0' + s;
	 }
	 return parseInt(s.split('').reverse().join(''),2);
};
// console.log(reverseBits(43261596));

var findNthDigit = function(n) {
	console.log(n);
    if(n = 11){
		console.log(n = 11);
        return 0;
    }
    return n;
};

console.log(findNthDigit(3));
