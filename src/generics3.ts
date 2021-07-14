class Queue<T> {
    list: T[] = [];

    get length() {
        return this.list.length;
    }

    // 새로운 것을 등록하는 queue
    enqueue(item: T) {
        this.list.push(item);
    }

    // 배열에 첫번째 항목을 빼내는 queue
    dequeue() {
        return this.list.shift();
    }
}

const queue = new Queue<number>();

// 데이터 삽입
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

// 데이터 추출
while (queue.length > 0) {
    console.log(queue.dequeue());
}
