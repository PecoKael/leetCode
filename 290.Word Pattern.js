// Given a pattern and a string str, find if str follows the same pattern.
//
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var buildArr = function(obj) {
	var a = [];
	for (var x in obj) {
		if (a.indexOf(obj[x]) == -1) {
			a.push(obj[x]);
		}
	}
	return a;
}

var wordPattern = function(pattern, str) {
	var arr = str.split(' ');
	var a = buildArr(pattern);
	var b = buildArr(arr);
	var s1 = '';
	var s2 = '';
	for (var x in pattern) {
		s1 += a.indexOf(pattern[x]);
	}
	for (var x in arr) {
		s2 += b.indexOf(arr[x]);
	}
	return s1 == s2 ? true : false;
};
console.log(wordPattern('abba', 'dog cat cat dog'));
