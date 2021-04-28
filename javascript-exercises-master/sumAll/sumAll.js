const sumAll = function (min, max) {
    let minNumber, maxNumber;
    if (min > 0 && max > 0) {

        if (max < min) {
            minNumber = max;
            maxNumber = min;
        } else {
            minNumber = min;
            maxNumber = max;
        }
    } else {
        return "ERROR";
    }
    let sum = 0;
    for (let i = minNumber; i <= maxNumber; i++) {
        sum += i;
    }
    if (typeof min != "number" || typeof max != "number") {
        return "ERROR";
    }
    return sum;

}

module.exports = sumAll
