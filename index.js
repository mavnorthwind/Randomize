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
console.log("Deine Glückszahlen sind: " + glueckszahlen);


try {
    var bug = randomizer.pullRandom(lotto, -3);
    console.log(bug);
} catch (e) {
    console.error(e);
}

