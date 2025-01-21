const myArray = [5, 3, 6, 2, 10];

function findSmallest(arr) {
    let smallest = arr[0];
    let smallestIndex = 0;
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
        smallestIndex = i;
      }
    }
  
    return smallestIndex;
  }
  
  function selectionSort(arr) {
    let newArr = [];
    let copiedArr = arr.slice()
  
    while (copiedArr.length > 0) {
      let smallestIndex = findSmallest(copiedArr)
      newArr.push(copiedArr.splice(smallestIndex, 1)[0])
    }
  
    return newArr;
  }

  console.log(selectionSort(myArray));
  