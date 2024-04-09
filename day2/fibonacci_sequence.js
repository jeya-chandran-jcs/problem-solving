function generateFibonacci(n) {
    if (n < 1) {
        return "Invalid input";
    }

    let fibonacciSequence = [0, 1];

    for (let i = 2; i < n; i++) {
        let nextFibonacci = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextFibonacci);
    }

    return fibonacciSequence;
}
console.log("First 10 Fibonacci numbers:", generateFibonacci(10));