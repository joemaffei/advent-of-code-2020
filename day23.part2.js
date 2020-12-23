let cups = [
    ...('789465123'.split('').map(x => +x)),
    ...(Array.from({length: 1_000_000 - 9}, (_, index) => index + 10))
];

class LinkedListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

const nodeArray = [];

// Create circular linked list
let tail;
let head = cups.reverse().reduce((list, value, index) => {
    const node = new LinkedListNode(value, list);
    if (index === 0) {
        tail = node;
    } else if (index === cups.length - 1) {
        tail.next = node;
    }
    nodeArray[value] = node;
    return node;
}, null);

let currentCup = head;
for (let move = 0; move < 10_000_000; move++) {
    const next1 = currentCup.next;
    const next2 = next1.next;
    const next3 = next2.next;

    const nextThreeCups = [next1.value, next2.value, next3.value];

    let destination = currentCup.value - 1;

    while (true) {
        if (destination === 0) {
            destination = 1_000_000;
        } else if (nextThreeCups.includes(destination)) {
            destination--;
        } else {
            break;
        }
    }

    const destCup = nodeArray[destination];
    currentCup.next = next3.next;
    next3.next = destCup.next;
    destCup.next = next1;

    currentCup = currentCup.next;
}

const oneCup = nodeArray[1];
const total = oneCup.next.value * oneCup.next.next.value;

console.log(total);
