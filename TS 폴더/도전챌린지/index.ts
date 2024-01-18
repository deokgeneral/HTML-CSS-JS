

class GenericQueue<T>{
    private items: T[] = [];

    enqueue(item: T) : void {
        this.items.push(item);
    }
    dequeue() :  T | undefined {
        return this.items.shift();
    }
    peek(): T | undefined {
        return this.items[0];
    }
    size() : number {
        return this.items.length;
    }
}

const stringQ = new GenericQueue<string>();
stringQ.enqueue("Hello");
console.log(stringQ.peek());
stringQ.dequeue()
stringQ.enqueue("TypeScript")
console.log(stringQ.size());
console.log(stringQ.peek());