const blackTiles = (
    require('fs')
    .readFileSync('day24.txt','utf8')
    .trim()
    .split(/\n/)
    .map(line => (
        line
        .replace(/nw/g, 1)
        .replace(/ne/g, 2)
        .replace(/se/g, 4)
        .replace(/sw/g, 5)
        .replace(/e/g, 3)
        .replace(/w/g, 6)
        .split('')
        .map(digit => ({
            1: [-1, -1],
            2: [1, -1],
            3: [2, 0],
            4: [1, 1],
            5: [-1, 1],
            6: [-2, 0]
        }[digit]))
        .reduce((position, move) => (
            [position[0] + move[0], position[1] + move[1]]
        ), [0, 0])
        .join()
    ))
    .reduce((set, position) => (
        set[set.has(position) ? 'delete' : 'add'](position), set
    ), new Set())
);

const gridSize = 200;

let floor = (
    Array.from({length: gridSize + 1}, (_, index) => index - gridSize / 2)
    .map(y => (
        Array.from({length: gridSize + 1}, (_, index) => index - gridSize / 2)
        .map(x => (
            [x * 2 + (y % 2),y]
        ))
    ))
    .flat()
    .reduce((obj, position) => {
        const positionAsString = position.join();
        obj[positionAsString] = blackTiles.has(positionAsString);
        return obj;
    }, {})
);

function checkNeighbors(position) {
    const [x, y] = position.split(',').map(x => +x);
    const neighbors = [
        [x - 1, y - 1].join(),
        [x + 1, y - 1].join(),
        [x - 2, y].join(),
        [x + 2, y].join(),
        [x - 1, y + 1].join(),
        [x + 1, y + 1].join(),
    ];

    const count = neighbors.map(pos => floor[pos]).filter(bool => bool).length;

    if (floor[position]) {
        // black tile
        return count > 0 && count <= 2
    } else {
        // white tile
        return count === 2
    }
}

for (let day = 0; day < 100; day++) {
    const newFloor = (
        Object.keys(floor)
        .reduce((obj, position) => {
            obj[position] = checkNeighbors(position);
            return obj;
        }, {})
    );

    const count = Object.values(newFloor).filter(bool => bool).length;
    floor = newFloor;

    console.log(`Day ${day + 1}: ${count}`);
}
