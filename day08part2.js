const instructions = (
    require('fs')
    .readFileSync('day08.txt', 'utf8')
    .trim()
    .split(/\n/)
);

const variations = instructions.reduce((arr, instruction, index) => {
    if (/(jmp|nop)/.test(instruction)) {
        const newInstructions = [...instructions];
        if (instruction.startsWith('jmp')) {
            newInstructions[index] = instruction.replace('jmp', 'nop');
        } else {
            newInstructions[index] = instruction.replace('nop', 'jmp');
        }

        arr.push(newInstructions);
    }

    return arr;
}, []);

for (const variation of variations) {
    const executedLines = new Set();
    let lineNumber = 0;
    let accumulator = 0;
    while (true) {
        if (lineNumber >= instructions.length) {
            console.log(accumulator);
            break;
        } else if (executedLines.has(lineNumber)) {
            break;
        } else {
            executedLines.add(lineNumber);
            const [instruction, value] = variation[lineNumber].split(' ');
            switch (instruction) {
                case 'acc': {
                    accumulator += parseInt(value);
                    lineNumber++;
                    break;
                }
                case 'jmp': {
                    lineNumber += parseInt(value);
                    break;
                }
                default: {
                    lineNumber++;
                    break;
                }
            }
        }
    }
}
