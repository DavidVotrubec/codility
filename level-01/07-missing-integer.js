/*
Write a function:

class Solution { public int solution(int[] A); }

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
*/

// Scored 100% Yupiii

function solution(A) {
    // Iteration 1
    const positiveA = A.filter(x => x > 0);

    let min = Number.MAX_SAFE_INTEGER;

    // Iteration 2
    positiveA.forEach(n => {
        let x = Math.abs(n);
        if (x < min) {
            min = x;
        }
    });

    if (min > 1) {
        min = 1;
    } else {
        // Find min gap in sorted array
        // Befare of trap: sort() is alphabetical by default
        // Iteration 3
        const sortedA = positiveA.sort((x,y) => x - y);
        const len = sortedA.length;

        // Iteration 4
        for (i = 0; i < len - 1; i++) {
            let diff = sortedA[i] - sortedA[i + 1];
            if (diff < -1) {
                // I have found min gap, return
                min = sortedA[i] + 1;
                return min;
            }
        }

        // There was no gap, take the last number and add 1
        return sortedA[len - 1] + 1;
    }

    return min;
}

module.exports = solution;