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

