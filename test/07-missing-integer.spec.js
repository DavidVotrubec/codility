const fc = require('fast-check');
const expect = require('expect.js');
const solution = require('../level-01/07-missing-integer');

// First test with hard-coded suites
// then with fast-check for property based tests

describe('tape-equilibrium', () => {
    it('should work with mix of negative and positive numbers', () => {
        const A = [-2, -3, -20, -30, 0, 2, 5, 7, 3, 1, 2, 100];
        const result = solution(A);
        expect(result).to.be(4);
    });
});
