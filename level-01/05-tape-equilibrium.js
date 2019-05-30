// A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.

// Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

// The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

// In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

// For example, consider array A such that:

//   A[0] = 3
//   A[1] = 1
//   A[2] = 2
//   A[3] = 4
//   A[4] = 3
// We can split this tape in four places:

// P = 1, difference = |3 − 10| = 7 
// P = 2, difference = |4 − 9| = 5 
// P = 3, difference = |6 − 7| = 1 
// P = 4, difference = |10 − 3| = 7 
// Write a function:

// function solution(A);

// that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.

// For example, given:

//   A[0] = 3
//   A[1] = 1
//   A[2] = 2
//   A[3] = 4
//   A[4] = 3
// the function should return 1, as explained above.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [2..100,000];
// each element of array A is an integer within the range [−1,000..1,000].

function solution(A) {
    const len = A.length;
    // const halfIndex = Math.floor(len/2);

    let min = Number.MAX_SAFE_INTEGER;
    // const partA = A.slice(0, halfIndex);
    // const partB = A.slice(halfIndex, len);

    // optimization hack:
    // Do not call sumArr in a loop, but just add/remove to a variable
    let sumA = A[0];
    let sumB = sumArr(A.slice(1, len));

    let diff = Math.abs(sumA - sumB);
    if (diff < min) {
        min = diff;
    }

    if (len <= 2) {
        return min;
    }

    for (var i=0; i < len; i++) {
        let item = A[i];
        sumA += item;
        sumB -= item;
        diff = Math.abs(sumA - sumB);

        console.log(A, item, sumA, sumB, i, diff);

        if (diff < min) {
            min = diff;
        }
    }

    return min;
}

function sumArr(arr) {
    return arr.reduce((partial_sum, a) => partial_sum + a, 0);
}

module.exports = solution;