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
    const halfIndex = len % 2 > 0 
        ? len / 2 + 1
        : (len / 2);

    let min = Number.MAX_SAFE_INTEGER;

    // TODO: This is place for optimalization
    // I am iterating A via sumArr() inside for-loop
    for (var i=1; i < halfIndex; i++) {
        const sumA = sumArr(A.slice(0, i));
        const sumB = sumArr(A.slice(i, len));

        const diff = Math.abs(sumA - sumB);
        if (diff < min) {
            min = diff;
        }
    }

    return min;
}

function sumArr(arr) {
    return arr.reduce((partial_sum, a) => partial_sum + a,0);
}