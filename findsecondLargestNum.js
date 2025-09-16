// Input: arr = [0, 3, 5, 2, 7, 9] → Output: 7
// Input: arr = [4, 4, 4, 4] → Output: No second largest found
// Input: arr = [5] → Output: Array should have at least two numbers
// Input: arr = [10, 20] → Output: 10


function findSecondLargest(arr) {
    if (arr.length < 2) {
        return "Array should have at least two numbers";
    }
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0 ; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

let arr = [4,4,4,4];
let reqNum = findSecondLargest(arr);
if (reqNum === -Infinity) {
    reqNum = "No second largest found"
}
console.log(reqNum);
