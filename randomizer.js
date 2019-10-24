'use strict';

function shuffle(arr) {
	for (var i=0; i<1000; i++) {
		var x = parseInt(Math.random() * arr.length);
		var y = parseInt(Math.random() * arr.length);
		
		var s = arr[x];
		arr[x] = arr[y];
		arr[y] = s;
	}
}

module.exports.shuffle = shuffle;
