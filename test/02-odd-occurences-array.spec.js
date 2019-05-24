const fc = require('fast-check');
const {randomInt} = require('../utils/number');
const {shuffle} = require('../utils/array');
const solution = require('../level-01/02-odd-occurences-array');

const maxValue = 1000000000;

describe('Odd occurences in Array', function() {
  it('should work', () => {
    fc.assert(fc.property(
      fc.nat(10000), function(arrLengthSeed) {
        const arr = getArrayWithRandomPairs(arrLengthSeed);
        const result = solution(arr);
        console.log(result);
      }
    ));
  });
});

function getArrayWithRandomPairs(arrLengthSeed) {
  // Generate array of odd length with pairs
  arrLengthSeed = Math.floor(arrLengthSeed / 2);
  console.log('arrLength', arrLengthSeed);

  if (arrLengthSeed == 0) {
    arrLengthSeed = 1;
  } else if (arrLengthSeed % 2 == 1) {
    arrLengthSeed += 1;
  }

  // Fill the array with pairs
  let arr = [];
  for (var i=0; i<arrLengthSeed; i++) {
    const rnd = randomInt(1, maxValue);
    arr.push(rnd);
    arr.push(rnd);
  }

  // add odd value
  addRandomToArray(arr);

  // randomize position in array
  return shuffle(arr);
}

function addRandomToArray(arr) {
  let random = randomInt(1, maxValue);
  
  // random value already in array, try again
  if (arr.indexOf(random) !== -1) {
    addRandomToArray(arr);
  }
  else {
    arr.push(random);
  }
}