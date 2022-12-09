const removeFromArray = function(array, ...inputsToBeRemoved) {
    for (let inputToBeRemoved of inputsToBeRemoved) {
        let indexOfInputToBeRemoved = array.indexOf(inputToBeRemoved);
        if (indexOfInputToBeRemoved == -1) {
            continue
        } else {
            array.splice(indexOfInputToBeRemoved, 1);
        };
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
