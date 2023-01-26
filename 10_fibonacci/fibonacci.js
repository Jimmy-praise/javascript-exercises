const fibonacci = function(number) {
number = parseInt(number);
let series = [0, 1, 1];
if (number < 0) {
    return "OOPS"
};
for (let i = 1; i <= number; i++) {
    let newNumber = series[series.length - 1] + series[series.length - 2];

    series.push(newNumber);
};
return series[number];
};

// Do not edit below this line
module.exports = fibonacci;
