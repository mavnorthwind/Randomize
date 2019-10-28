const expect = require("chai").expect;
const randomizer = require("../randomizer");

describe("shuffle tests", function () {
    it('should throw if parameter is not an array', function () {
        var x = 12;
        expect(() => randomizer.shuffle(x)).to.throw(/Argument mismatch/);
    });

    it('must return the same number of elements', function () {
        var a = ["tri", "tra", "trallali"];
        randomizer.shuffle(a);
        expect(a.length).to.equal(3);
    });

    it('must work even for trivial cases', function () {
        var a = ["bla"];
        randomizer.shuffle(a);

        expect(a[0]).to.equal("bla");
    });
});


describe("pullRandom tests", function () {
    it('should throw if first parameter is not an array', function () {
        var x = 12;

        expect(() => randomizer.pullRandom(x, 1)).to.throw(/Argument mismatch/);
    });

    it('should throw if second parameter is too big', function () {
        var a = [ 1, 2, 3];

        expect(() => randomizer.pullRandom(a, 4)).to.throw(/Argument out of range/);
    });

    it('should throw if second parameter is too small', function () {
        var a = [1, 2, 3];

        expect(() => randomizer.pullRandom(a, -1)).to.throw(/Argument out of range/);
    });

    it('should return the correct number of objects', function () {
        var a = [1, 2, 3];
        var res = randomizer.pullRandom(a, 2);

        expect(res.length).to.be.equal(2);

        res.sort(); // reduce the number of possibilities

        var possible = [[1, 2], [1, 3], [2, 3]];

        expect(possible.find((x) => x[0] == res[0] && x[1] == res[1])).is.not.undefined;
    });

    it('must respect allowDupes argument', function () {
        var a = [1, 2];
        var res = randomizer.pullRandom(a, 5, true);

        expect(res.length).to.be.equal(5);

        // bei 5 Zügen muss ein Wert doppelt vorkommen:
        var cnt1 = 0, cnt2 = 0;
        for (var i in res) {
            switch (res[i]) {
                case 1:
                    cnt1++;
                    break;
                case 2:
                    cnt2++;
                    break;
                default:
                    throw new Error("Unexpected result " + i);
            }
        }

        expect(cnt1 > 1 || cnt2 > 1);
    });
});