//

class Stack {
    constructor() {
        this.item = [];
    }
    push(value) {
        this.item.push(value);
    }
    pop() {
        if (this.item.length === 0)
            return "Underflow";
        return this.item.pop();
    }
    peek() {
        if (this.item.length === 0)
            return "Underflow";
        return this.item[this.item.length - 1];
    }
}


var stack = new Stack();
stack.push(45);
stack.push(23);
console.log(stack.pop());
stack.push(7);
stack.push(98);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack);