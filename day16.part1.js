const input = (
    require('fs')
    .readFileSync('day16.txt','utf8')
    .trim()
    .split(/\n\n/)
);

function range(from, to) {
    return [...Array(to - from + 1).keys()].map(n => n + from);
}

const validValues = (
    input[0]
    .split(/\n/)
    .map(line => line.match(/[\d-]+/g))
    .flat()
    .map(r => {
        const [from, to] = r.split('-').map(x => +x);
        return range(from, to);
    })
    .flat()
    .reduce((set, n) => set.add(n), new Set())
);

const tickets = (
    input[2]
    .split(/\n/)
    .slice(1)
    .map(line => line.split(',').map(x => +x))
);

const scanningErrorRate = (
    tickets
    .flat()
    .reduce((sum, value) => {
        if (!validValues.has(value)) {
            return sum += value;
        } else {
            return sum;
        }
    }, 0)
);

console.log(scanningErrorRate);
