const chai = require('chai');
const assert = chai.assert;
const sumIntervals = require('./code')
chai.config.truncateThreshold = 0;

describe('sumIntervals', function () {
    it('should return the correct sum for non overlapping intervals', function () {
        const test1 = [[1, 5]];
        const test2 = [[1, 5], [6, 10]];
        assert.strictEqual(sumIntervals(test1), 4);
        assert.strictEqual(sumIntervals(test2), 8);
    });

    it('should return the correct sum for overlapping intervals', function () {
        const test1 = [[1, 5], [1, 5]];
        const test2 = [[1, 4], [7, 10], [3, 5]];
        assert.strictEqual(sumIntervals(test1), 4);
        assert.strictEqual(sumIntervals(test2), 7);
    });

    it('small random tests', () => {
        const data = [
            // {input: [[-9, 19], [10, 19], [-5, 3], [14, 15], [-19, 6]], output: 38},
            // {input: [[-19, 19], [-19, 6], [10, 19], [14, 15]], output: 38},
            // {input: [[-19, 19], [-19, 6], [10, 19], [14, 15]], output: 38},
            // {input: [[-19, 19], [-19, 19]], output: 38},
            // {
            //     input: [[-16, -15], [-13, 13], [-20, 1], [-8, 18], [1, 19], [7, 10], [-8, 0], [-7, 18]], output: 39
            // },
            // {input: [ [ -20, 19 ], [ -20, 1 ], [ 7, 10 ] ], output: 39},
            // {input: [ [ -20, 19 ], [ -20, 19 ] ], output: 39},
            {input: [ [ 19, 20 ], [ 17, 19 ], [ 10, 14 ], [ 9, 10 ], [ -7, 3 ] ], output: 18},
        ]

        // [ [ 18, 20 ], [ 14, 19 ], [ 10, 14 ], [ -7, 3 ] ]
        data.forEach(item => {
            assert.strictEqual(sumIntervals(item.input), item.output);
        })
    })
});