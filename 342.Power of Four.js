// Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

 /**
  * @param {number} num
  * @return {boolean}
  */
 var isPowerOfFour = function(num) {
	 if (num<-2147483647 || num > 2147483647){
		 return false;
	 }
    while (num != 1) {
        console.log(num);
    	if(num % 4 == 0 ){
            num = num / 4;
            continue;
        }
        return false;
    }
	return true;
 };
console.log(isPowerOfFour(17));
