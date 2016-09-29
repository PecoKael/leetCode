// Count the number of prime numbers less than a non-negative number, n.


/**
 * @param {number} n
 * @return {number}
 */
var isPrime = function(n){
    if(n < 2){
        return false;
    }
    for(var i = 2; i <= Math.sqrt(n);i++){
        if(n%i == 0){
            return false;
        }
    }
    return true;
}
var countPrimes = function(n) {
    if(n == 0){
        return n;
    }
    if(n == 2){
        return 0;
    }
    var count = 0;
    while(n > 0){
        if(isPrime(n-1)){
            count++;
        }
        n--;
    }
    return count;
};