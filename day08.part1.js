const instructions = (
    require('fs')
    .readFileSync('day08.txt', 'utf8')
    .trim()
    .split(/\n/)
);

const executedLines = new Set();
let lineNumber = 0;
let accumulator = 0;

while (true) {
    if (executedLines.has(lineNumber)) {
        console.log(accumulator);
        break;
    } else {
        executedLines.add(lineNumber);
        var [instruction, value] = instructions[lineNumber].split(' ');
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
