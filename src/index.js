module.exports = function reverse(n) {
    if (!Number.isInteger(n)) {
        return false;
    }

    if (n < 0) {
        n = Math.abs(n);
    }

    let reverseNum = n.toString().split("").reverse().join("");

    return Number(reverseNum);
}
