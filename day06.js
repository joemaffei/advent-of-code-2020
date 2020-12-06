// day 06 part 1
console.log('part 1',
    require('fs')
    .readFileSync('day06.txt','utf8')
    .trim()
    .split(/\n\n/)
    .map((group) => (
        group
        .replace(/\n/g, '')
        .split('')
        .reduce((set, letter) => set.add(letter), new Set())
    ))
    .reduce((total, groupAnswers) => total + groupAnswers.size, 0)
);

// day 06 part 2
console.log('part 2',
    require('fs')
    .readFileSync('day06.txt','utf8')
    .trim()
    .split(/\n\n/)
    .map((group) => (
        group
        .split(/\n/)
        .map((answers) => answers.split(''))
        .reduce((groupAnswers, memberAnswers) => (
            groupAnswers
            .filter((groupAnswer) => memberAnswers.includes(groupAnswer))
        ))
    ))
    .reduce((total, groupAnswers) => total + groupAnswers.length, 0)
);
