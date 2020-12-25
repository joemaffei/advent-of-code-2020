const cardKey = 10212254;
const doorKey = 12577395;

let cardLoop, doorLoop;
let loop = 1;
let value = 1;
while (true) {
    value *= 7;
    value %= 20201227;
    if (!cardLoop && value === cardKey) cardLoop = loop;
    if (!doorLoop && value === doorKey) doorLoop = loop;
    if (cardLoop && doorLoop) break;
    loop++;
}

let key = 1;
for (let loop = 0; loop < cardLoop; loop++) {
    key *= doorKey;
    key %= 20201227;
}

console.log(key);
