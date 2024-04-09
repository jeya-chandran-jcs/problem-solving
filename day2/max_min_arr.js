function findMinMax(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }

    let max = arr[0]; 
    let min = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; 
        }
        if (arr[i] < min) {
            min = arr[i]; 
        }
    }

    return { max, min };
}

const numbers = [10, 5, 20, 15, 8];
console.log(findMinMax(numbers));