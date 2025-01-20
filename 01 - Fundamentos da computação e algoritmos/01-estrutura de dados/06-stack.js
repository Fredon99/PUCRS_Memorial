class Stack {
    constructor(arr = []) {
        this.arr = arr;
    }
    
    append (value) {
        this.arr.push(value)
        return this.arr
    }

    remove () {
        this.arr.pop()
        return this.arr
    }

    get show() {
        return this.arr
    }
}

//Last In First Out
const myStack = new Stack([1,2,3])
console.log(myStack.show)
myStack.append(10)
console.log(myStack.show)
myStack.remove()
console.log(myStack.show)