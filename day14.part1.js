const lines = (
    require('fs')
    .readFileSync('day14.txt', 'utf8')
    .trim()
    .split(/\n/)
);

let mem = {};
let mask;

for (let line of lines) {
    if (line.startsWith('mask')) {
        mask = line.split(' = ')[1].split('');
    } else {
        let [location, value] = line.match(/\d+/g).map(x => +x);
        mem[location] = parseInt(
            value
            .toString(2)
            .padStart(36, 0)
            .split('')
            .map((digit, index) => mask[index] === 'X' ? digit : mask[index])
            .join('')
        , 2);
    }
}

const sum = Object.values(mem).reduce((a, c) => a + c, 0);

console.log(sum);
