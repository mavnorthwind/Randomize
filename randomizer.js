'use strict';

function shuffle(arr) {
	if (arr.constructor !== Array) {
		throw new Error("Argument mismatch: arr is not an array");
	}

	for (var i=0; i<1000; i++) {
		var x = parseInt(Math.random() * arr.length);
		var y = parseInt(Math.random() * arr.length);
		
		var s = arr[x];
		arr[x] = arr[y];
		arr[y] = s;
	}
}

function pullRandom(arr, count, allowDupes = false) {
	if (arr.constructor !== Array) {
        throw new Error("Argument mismatch: arr is not an array");
	}
	if (count >= arr.length) {
        throw new Error("Argument out of range. count is longer than the array");
	}
    if (count < 0) {
        throw new Error("Argument out of range. count must be >= 0");
    }
	
    shuffle(arr);

    return arr.slice(0, count);
}

module.exports.shuffle = shuffle;
module.exports.pullRandom = pullRandom;