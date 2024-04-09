function findSecondLargestElement(array) {
    if (array.length < 2) {
        return "Array should have at least two elements";
    }

    let largest = array[0]; 
    let secondLargest = -Infinity; 

    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            secondLargest = largest; // Update secondLargest with the current largest
            largest = array[i]; 
        } else if (array[i] > secondLargest && array[i] !== largest) {
            secondLargest = array[i]; // Update secondLargest if current element is greater than the current secondLargest
        }
    }

    // If no second largest element found
    if (secondLargest === -Infinity) {
        return "There is no second largest element";
    }

    return secondLargest;
}

const numbers = [10, 5, 20, 15, 8];
console.log("Second largest element:", findSecondLargestElement(numbers)); 
