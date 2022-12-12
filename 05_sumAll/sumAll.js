const sumAll = function(num1, num2) {
    let finalSum = 0;
    if (num1 < 0 || num2 < 0) {
        return 'ERROR'
    } else if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
        return 'ERROR'
    } else if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            finalSum = finalSum + i;
        };
        return finalSum;
    } else if (num1 > num2) {
        for (let i = num2; i <= num1; i++) {
            finalSum = finalSum + i;
        };
        return finalSum;
    }
    
};

// sumAll(num1, num2);

// Do not edit below this line
module.exports = sumAll;
