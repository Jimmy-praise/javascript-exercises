const repeatString = function(string, num) {
    let text = ''
    if (num < 0) {
        text = 'ERROR'
    } else {
        for (let i = 0; i < num; i++) {
        text += string
    }
    }
    return text
};

repeatString('hey', 3)
repeatString('hey', 10)
repeatString('hey', 1)
repeatString('hey', 0)
repeatString('hey', -1)

let randomNumber = Math.random() * 10
repeatString('hey', randomNumber)


// Do not edit below this line
module.exports = repeatString;
