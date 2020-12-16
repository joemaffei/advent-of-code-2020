const input = [7, 14, 0, 17, 11, 1, 2];

const history = new Map();
input.forEach((number, index) => history.set(number, [index, index]));

while (input.length < 30000000) {
    const lastNumber = input[input.length - 1];
    const lastHistory = history.get(lastNumber);
    const nextNumber = lastHistory[1] - lastHistory[0];
    const nextHistory = history.get(nextNumber);
    if (nextHistory) {
        history.set(nextNumber, [nextHistory[1], input.length]);
    } else {
        history[nextNumber] = [input.length, input.length];
        history.set(nextNumber, [input.length, input.length])
    }

    input.push(nextNumber);
}

// console.log(input)

console.log(input[30000000 - 1]);
