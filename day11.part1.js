let lines = (
    require('fs')
    .readFileSync('day11.txt', 'utf8')
    .trim()
    .split(/\n/)
    .map(line => line.split(''))
);

const countOccupied = (row, column) => {
    let rowAbove = [];
    if (row > 0) {
        if (column === 0) {
            rowAbove = lines[row - 1].slice(0, 2);
        } else if (column === lines[0].length - 1) {
            rowAbove = lines[row - 1].slice(-2);
        } else {
            rowAbove = lines[row - 1].slice(column - 1, column + 2);
        }
    }
    let rowBelow = [];
    if (row < lines.length - 1) {
        if (column === 0) {
            rowBelow = lines[row + 1].slice(0, 2);
        } else if (column === lines[0].length - 1) {
            rowBelow = lines[row + 1].slice(-2);
        } else {
            rowBelow = lines[row + 1].slice(column - 1, column + 2);
        }
    }
    let neighbors = [];
    if (column < lines[0].length - 1) neighbors.push(lines[row][column + 1]);
    if (column > 0) neighbors.push(lines[row][column - 1]);
    const adjacent = [...rowAbove, ...rowBelow, ...neighbors];
    const count = adjacent.filter(x => x === '#').length;
    return count;
}

let iterations = 1;
let newLines = [];

while (true) {
    for (let row = 0; row < lines.length; row++) {
        const newRow = [];
        for (let column = 0; column < lines[0].length; column++) {
            if (lines[row][column] === '.') {
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

    if (JSON.stringify(newLines) === JSON.stringify(lines)) {
        console.log(`stable after ${iterations} iterations`);
        const totalOccupied = newLines.map(line => line.join('')).join('').split('').filter(x => x === '#').length;

        console.log(totalOccupied);
        break;
    }

    lines = newLines;
    newLines = [];
    iterations++;
}
