function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
    return parseInt(randomNumber(min, max));
}

module.exports = {
    randomNumber,
    randomInt
}