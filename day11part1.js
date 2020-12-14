let lines = (
    require('fs')
    .readFileSync('day11.txt', 'utf8')
    .trim()
    .split(/\n/)
    .map(line => `.${line}.`)
);

const allDots = Array.from(Array(lines[0].length)).map(() => '.').join('');

lines.unshift(allDots);
lines.push(allDots);

lines = lines.map(line => line.split(''));

const countOccupied = (row, column) => {
    const rowAbove = lines[row - 1].slice(column - 1, column + 2);
    const rowBelow = lines[row + 1].slice(column - 1, column + 2);
    const neighbors = [lines[row][column - 1], lines[row][column + 1]];
    const adjacent = [...rowAbove, ...rowBelow, ...neighbors];
    const count = adjacent.filter(x => x === '#').length;
    return count;
}

let iterations = 1;
let newLines = [];

while (true) {
    for (let row = 0; row <= lines.length; row++) {
        if (row === 0 || row === lines.length) {
            newLines.push(allDots);
        } else {
            const newRow = [];
            for (let column = 0; column <= lines[0].length; column++) {
                if (column === 0 || column === lines.length || lines[row][column] === '.') {
                    newRow.push('.');
                } else if (lines[row][column] === 'L' && countOccupied(row, column) === 0) {
                    newRow.push('#');
                } else if (lines[row][column] === '#' && countOccupied(row, column) > 3) {
                    newRow.push('L');
                } else {
                    newRow.push(lines[row][column]);
                }
            }
            newLines.push(newRow);
        }
    }

    console.log(JSON.stringify(newLines));

    if (JSON.stringify(newLines) === JSON.stringify(lines)) {
        console.log(`stable after ${iterations} iterations`);
        // const totalOccupied = newLines.map(line => line.join('')).join('').split('').filter(x => x === '#').length;
        // console.log(JSON.stringify(newLines));

        // console.log(totalOccupied);
        break;
    }

    lines = newLines;
    newLines = [];
    iterations++;
}
