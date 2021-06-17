class SLLNode {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    addFront(value) {
        var newNode = new SLLNode(value);
        if (this.head == null) {
            this.head = newNode;
            return this;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            return this
        }
    }
    removeFront() {
        this.head = this.head.next;
        return this
    }
    front() {
        if (this.head) {
            return this.head.data;
        }
        return null;
    }
    display() {
        let pointer = this.head;
        let list = "";
        while (pointer) {
            list += pointer.data + ", ";
            pointer = pointer.next
        }
        console.log(list)
        return list
    }
}
var mySLL = new SLL();
mySLL.addFront("First");
mySLL.addFront("actually first").addFront("second").addFront("okay we get it");
