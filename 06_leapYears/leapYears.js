const leapYears = function(year) {
    let yearDividedByFour = year / 4;
    let yearDividedByOneHundred = year / 100;
    let yearDividedByFourHundred = year / 400;
    if (Math.floor(yearDividedByFourHundred) == yearDividedByFourHundred) {
            return true;
        } 
        else if (Math.floor(yearDividedByOneHundred) == yearDividedByOneHundred) {
            return false;
        } 
        else if (Math.floor(yearDividedByOneHundred) == yearDividedByOneHundred && 
        Math.floor(yearDividedByFourHundred) != yearDividedByFourHundred) {
            return false;
        }
        else if (Math.floor(yearDividedByFour) == yearDividedByFour) {
            return true;
        }
        else if (Math.floor(yearDividedByFourHundred) != yearDividedByFourHundred || 
        Math.floor(yearDividedByOneHundred) != yearDividedByOneHundred || 
        Math.floor(yearDividedByFour) == yearDividedByFour) {
            return false;
        }
};

// Do not edit below this line
module.exports = leapYears;
