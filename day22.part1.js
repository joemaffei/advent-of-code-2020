const player1 = [43, 9, 33, 47, 3, 24, 50, 39, 31, 44, 23, 17, 30, 10, 46, 35, 7, 8, 18, 19, 29, 1, 38, 40, 41].reverse();
const player2 = [48, 42, 27, 34, 12, 26, 28, 11, 4, 6, 14, 22, 16, 2, 15, 20, 32, 25, 49, 45, 36, 5, 21, 13, 37].reverse();

while (true) {
    if (player1.length && player2.length) {
        const card1 = player1.pop();
        const card2 = player2.pop();
        if (card1 > card2) {
            player1.unshift(card1);
            player1.unshift(card2);
        } else {
            player2.unshift(card2);
            player2.unshift(card1);
        }
    } else {
        break;
    }
}

const winner = player1.length ? player1 : player2;

const total = winner.reduce((sum, card, index) => sum + card * (index + 1), 0);

console.log(total);
