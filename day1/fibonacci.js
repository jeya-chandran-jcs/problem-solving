function findNthFibonacci(n) {
    if (n < 1) {
        return "Invalid input";
    }

    let fib1 = 0;
    let fib2 = 1;

    if (n === 1) {
        return fib1;
    } else if (n === 2) {
        return fib2;
    }

    let fib;
    for (let i = 3; i <= n; i++) {
        fib = fib1 + fib2;
        fib1 = fib2;
        fib2 = fib;
    }

    return fib;
}

console.log("5th Fibonacci number:", findNthFibonacci(5));
