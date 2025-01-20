const myArray = [5,8,6,1,2,4]

function bubbleSort (arr) {
    const len = arr.length - 1
    for (let i=0; i < len; i++) {
        for (let j=0; j < len - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
        }
    }
    return arr;
}

console.log(bubbleSort(myArray))