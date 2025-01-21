const guessArray = [7, 17, 21, 24, 28, 39, 40, 51, 52, 52, 56, 64, 66, 74, 78, 78, 87, 88, 93, 94]
let guessNumber = 93;

function binarySearch (guessArray, guessNumber) {
    
    let low = 0
    let high = guessArray.length - 1
    let iterations = 0

    while (low <= high) {

        let mid = Math.floor((low + high) /2)
        const numberIndex = guessArray.indexOf(guessNumber)
        iterations ++;

        if (mid === numberIndex) {
            return `Number choosed: ${guessArray[mid]} | Iterations needed: ${iterations}`
        } else if (mid > numberIndex) {
            high = mid - 1
        } else if (mid < numberIndex) {
            low = mid + 1
        }
    }  
    return "Number not found";
}

console.log(binarySearch(guessArray,guessNumber));

