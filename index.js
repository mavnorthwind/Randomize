'use strict';

const randomizer = require("./randomizer");

var bla = [];
for (var i=0; i<100; i++) {
	bla.push(i);
}

console.log("Before Shuffling");
console.log(`bla[0] = ${bla[0]}`);
console.log(`bla[42] = ${bla[42]}`);
console.log(`bla[last] = ${bla[bla.length-1]}`);

randomizer.shuffle(bla);

console.log("After Shuffling");
console.log(`bla[0] = ${bla[0]}`);
console.log(`bla[42] = ${bla[42]}`);
console.log(`bla[last] = ${bla[bla.length-1]}`);

var lotto = [];
for (var i = 1; i <= 49; i++) {
    lotto.push(i);
}

var glueckszahlen = randomizer.pullRandom(lotto, 6);
glueckszahlen.sort((a, b) => a - b); // sort numerically and not as strings!
console.log("Deine Gl�ckszahlen sind: " + glueckszahlen);

var wuerfel = [1, 2, 3, 4, 5, 6];
var wurf3w6 = randomizer.pullRandom(wuerfel, 3, true);
console.log("Dein Wurf (3W6): " + wurf3w6);
