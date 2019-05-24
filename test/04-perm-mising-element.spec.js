const fc = require('fast-check');
const {randomInt} = require('../utils/number');
const {shuffle, fillArrayWithRange} = require('../utils/array');
const solution = require('../level-01/04-perm-missing-element');

describe('Find missing item in Array', function() {
    it('should work', () => {
      fc.assert(fc.property(
        fc.nat(10), function(arrLengthSeed) {
          const arr = generateArray(arrLengthSeed);
            console.log('Array is ', arr);

          const result = solution(arr);
          console.log(result);
        }
      ));
    });
  });

function generateArray(len) {
    return removeRandomItemFromArray(shuffle(fillArrayWithRange(len)));
}

function removeRandomItemFromArray(arr) {
    const len = arr.length;
    const rndIndex = randomInt(0, len-1);
    arr.splice(rndIndex, 1);
    return arr;
}