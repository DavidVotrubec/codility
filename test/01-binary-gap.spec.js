//const jsc = require('jsverify'); // really weird syntax, does not understand
const fc = require('fast-check');
const solution = require('../level-01/01-binary-gap');

// TODO: Write better tests, generate same input as Codility

describe('Binary Gap', function() {
  fc.assert(fc.property(
    fc.nat(), function(a) {
      if (a == 0) {
        return true;
      }
      // console.log(a, solution(a));
      // console.log('');
      return true;
    }
  ))
  
});