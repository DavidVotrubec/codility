https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
function solution(a) {
    const counts = {};
    for(let i=0; i<a.length; i++) {
        const val = a[i];
        counts[val] = (counts[val] || 0) + 1;
    }

    for (prop in counts) {
        if (counts[prop] == 1) {
            return parseInt(prop);
        }
    }

    return 0;
}

module.exports = solution;