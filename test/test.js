var assert = require('assert');
var Oecumene = require('../src/js/Oecumene.js').Oecumene;

describe("A calculator", function () {
    describe("adding 3 and 4 together", function () {
        it("should return 7", function () {
            var o = new Oecumene();
            var result = o.AddNumbers(3, 4);
            assert.equal(7, result);
        });
    });
});