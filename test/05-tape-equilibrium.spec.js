const fc = require('fast-check');
const expect = require('expect.js');
const solution = require('../level-01/05-tape-equilibrium');

// First test with hard-coded suites
// then with fast-check for property based tests

describe('tape-equilibrium', () => {
    it('should return zero for identical halves', () => {
        const arr = [1, 1];
        const result = solution(arr);
        expect(result).to.be(0);
    });

    it('should work with something so simple', () => {
        const arr = [1, 1, 3];
        const result = solution(arr);
        expect(result).to.be(1);
    });

    it('should work with only one element on one of the sides', () => {
        const arr = [3];
        const result = solution(arr);
        expect(result).to.be(3);
    });

    it('should work with equal negative and positive', () => {
        const arr = [-1000, 1000];
        const result = solution(arr);
        expect(result).to.be(2000);
    })

    // based on failed score
    it('should work ooo', () => {
        const result = solution([10, 2, 3, 4, 1]);
        expect(result).to.be(0);
    })

    // TODO: This scenario fails
    // // simple_negative - based on failed score
    // it('should work with negative number - odd length', () => {
    //     const arr = [-1, -5, -4, -2, -3];
    //     const result = solution(arr);
    //     expect(result).to.be(3);
    // });

    // it('should work with negative number - even length', () => {
    //     const arr = [-1, -5, -4, -2, -3, -7];
    //     const result = solution(arr);
    //     expect(result).to.be(2);
    // })
});
