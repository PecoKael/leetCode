// Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.

// Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
	if(isNaN(parseFloat(str))){
		return 0;
	}
	else if(str.indexOf('e') > -1){
		var newstr = parseFloat(str.substr(0,str.indexOf('e')));
		if(newstr > 2147483647){
		return 2147483647;	
		}else if(newstr < -2147483648){
			return -2147483648;
		}
		return (parseFloat(str.substr(0,str.indexOf('e'))));
	}
	else if(parseFloat(str) > 2147483647){
		return 2147483647;	
	}else if(parseFloat(str) < -2147483648){
		return -2147483648;
	}
	return parseFloat(str);    
};

console.log(myAtoi("   -115579378e25"));
