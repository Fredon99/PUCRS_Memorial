class Queue {
    constructor (arr = []) {
        this.arr = arr
    }

    queue (value) {
        this.arr.push(value)
        return this.arr
    }

    dequeue () {
       this.arr.shift()
       return this.arr
    }

    get show () {
        return this.arr
    }
}

//First In First Out
const myQueue = new Queue([1,2,3])
myQueue.queue(5)
console.log(myQueue.show)
myQueue.dequeue()
console.log(myQueue.show)
myQueue.queue(7)
console.log(myQueue.show)
myQueue.dequeue()
console.log(myQueue.show)