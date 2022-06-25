module.exports = function reverse(n) {
    if (n > 0) {
        let string = String(n);
        let stringRevers = string.split("");
        let c = stringRevers[2];
        if (c === "0") {
            delete stringRevers[2];
        }
        stringRevers = stringRevers.reverse().join("");
        let number = Number(stringRevers);
        return number;
    } else if (n < 0) {
        let string = String(n);
        let stringRevers = string.split("").reverse().join("").slice(0, -1);
        let number = Number(stringRevers);
        return number;
    }
};
