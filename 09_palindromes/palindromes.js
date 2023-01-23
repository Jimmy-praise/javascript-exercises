const palindromes = function (string) {
    let stringArray = string.split('');
    let lettersArray = stringArray.filter(
        letter => !(letter.includes(' ') || letter.includes(',') || letter.includes('.') || letter.includes('!')))
    let stringLetters = (lettersArray.join('')).toLowerCase();

    let backwardLettersArray = lettersArray.reverse();
    let stringBackwardLetters = (backwardLettersArray.join('')).toLowerCase();

    return stringLetters == stringBackwardLetters ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
