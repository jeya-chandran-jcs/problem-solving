function findLargestElement(array) {
    if (array.length === 0) {
        return "Array is empty";
    }

    let largest = array[0]; 

    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i]; // Update largest if current element is greater
        }
    }

    return largest;
}

const numbers = [10, 5, 20, 15, 8];
console.log("Largest element:", findLargestElement(numbers));