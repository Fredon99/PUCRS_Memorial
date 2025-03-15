class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Add a new node at the end
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    // Add a new node at the beginning
    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    // Remove a node from the end
    pop() {
        if (!this.head) return null;
        let current = this.head;
        let previous = null;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        if (previous) {
            previous.next = null;
            this.tail = previous;
        } else {
            this.head = null;
            this.tail = null;
        }
        this.length--;
        return current.value;
    }

    // Print the linked list
    print() {
        let current = this.head;
        let result = '';
        while (current) {
            result += `${current.value} -> `;
            current = current.next;
        }
        console.log(result + 'null');
    }
}

// Example usage
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.print(); // Output: 1 -> 2 -> 3 -> null
list.pop();
list.print(); // Output: 1 -> 2 -> null
list.prepend(0);
list.print(); // Output: 0 -> 1 -> 2 -> null
