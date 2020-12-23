let cups = '789465123';

for (let move = 0; move < 100; move++) {
    const currentCup = cups[0];
    const nextThreeCups = cups.slice(1, 4);

    let destination = currentCup - 1;
    while (true) {
        if (destination === 0) {
            destination = Math.max.apply(null, cups.slice(4, 9).split(''));
            break;
        } else if (nextThreeCups.includes(destination)) {
            destination--;
        } else {
            break;
        }
    }

    const capture = cups.slice(4, cups.indexOf(destination) + 1);
    const tail = cups.slice(cups.indexOf(destination) + 1, 9);

    cups = capture + nextThreeCups + tail + currentCup;
}

const cupsAfter1 = cups.slice(cups.indexOf(1) + 1, 9) + cups.slice(0, cups.indexOf(1));

console.log(cupsAfter1);
