console.log(
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
    .size
);
