const guessArray = [7, 17, 21, 24, 28, 39, 40, 51, 52, 52, 56, 64, 66, 74, 78, 78, 87, 88, 93, 94];
let guessNumber = 93;

function linearSearch (arr, guess) {
    let iterations = 0;
    for (const value of arr) {
        iterations ++;
        if (value === guess) {
            return `The number choosed is ${value} | Iterations needed ${iterations}`
        }
    }
    return "Number not found"
}


console.log(linearSearch(guessArray, guessNumber));