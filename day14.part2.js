const lines = (
    require('fs')
    .readFileSync('day14.txt', 'utf8')
    .trim()
    .split(/\n/)
);

// creates an array of binary strings from 0 to 2**n - 1
const binarySequence = (n) => Array.from(Array(2**n)).map((_, i) => i.toString(2).padStart(n, 0));

// replaces each X with the nth item in seq
const replace = (str, replacements) => {
    let i = 0;
    return str.split('').map(c => c === 'X' ? replacements[i++] : c).join('')
}

let mem = {};
let mask;

for (let line of lines) {
    if (line.startsWith('mask')) {
        mask = line.split(' = ')[1].split('');
    } else {
        let [location, value] = line.match(/\d+/g).map(x => +x);
        const maskedLocation = (
            location
            .toString(2)
            .padStart(36, 0)
            .split('')
            .map((digit, index) => mask[index] === '0' ? digit : mask[index] === '1' ? 1 : 'X')
            .join('')
        );
        const floatingBits = maskedLocation.match(/X/g).length;
        const addresses = binarySequence(floatingBits).map(bin => parseInt(replace(maskedLocation, bin), 2));
        addresses.forEach(address => {
            mem[address] = value;
        });
    }
}

const sum = Object.values(mem).reduce((a, c) => a + c, 0);

console.log(sum);
