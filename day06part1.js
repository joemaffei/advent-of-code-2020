// day 06 part 1
require('fs')
.readFileSync('day06.txt','utf8')
.trim()
.split(/\n\n/)
.map((group) => (
    group
    .replace(/\n/g, '')
    .split('')
    .reduce((groupAnswers, letter) => groupAnswers.add(letter), new Set())
))
.reduce((total, groupAnswers) => total + groupAnswers.size, 0);
