// https://app.codility.com/programmers/lessons/1-iterations/binary_gap/
// This solution scored 93%
function solution(n) {
    if (n<=0 || n>=2147483647) {
        throw new Error("invalid number");
    }

    const bin = dec2bin(n);
    if (bin.indexOf('0') == -1) return 0;

    let result = null;
    for (let i = 0; i<bin.length; i++) {
        let needle = new Array(i).fill(0).join('') + '1';
        let position = bin.indexOf(needle);
        if (position == -1) {
            break;
        }
        else {
            result = i;
        }
    }
    return result;
}

function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

module.exports = solution;