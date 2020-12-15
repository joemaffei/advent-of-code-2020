const input = [7, 14, 0, 17, 11, 1, 2];

while (input.length < 2020) {
    const inputCopy = input.slice(0, -1);
    const reverseInput = inputCopy.reverse();
    const lastNumber = input[input.length - 1];
    const lastIndex = reverseInput.indexOf(lastNumber) + 1;
    input.push(lastIndex);
}

console.log(input[2019]);
