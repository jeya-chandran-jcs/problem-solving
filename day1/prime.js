function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // Not prime
        }
    }

    return true; // Prime
}

console.log(isPrime(7)); 
console.log(isPrime(20));