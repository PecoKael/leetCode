// Write a function that takes a string as input and reverse only the vowels of a string.

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
	var vowels = ['a','e','i','o','u','A','E','I','O','U'];
	var arr = [];
	s = s.split('');
	s = s.map(function(e) {
		if(vowels.indexOf(e) != -1){
			arr.push(e);
			return '*';
		}else{
			return e;
		}
	});
	s = s.map(function(e){
		return e == '*' ? arr.pop() : e;
	})
	return s.join('');
};
