const numbers = (
    require('fs')
    .readFileSync('day09.txt', 'utf8')
    .trim()
    .split(/\n/)
    .map(n => +n)
);

// https://stackoverflow.com/a/57834210
const pairs = (arr) => (
    arr
    .map((first, index) => (
        arr
        .slice(index + 1)
        .map(second => [first, second])
    ))
    .flat()
);

const sumsOfPairs = (arr) => pairs(arr).map(([first, second]) => first + second);

for (let i = 25; i <= numbers.length; i++) {
    const prev25 = numbers.slice(i - 25, i);
    const sums = sumsOfPairs(prev25);
    if (!sums.includes(numbers[i])) {
        console.log(numbers[i]);
        break;
    }
}
