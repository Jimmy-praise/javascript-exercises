const getTheTitles = function(array) {
    let titlesArray = [];
    let titles = array.map(obj => titlesArray.push(obj['title'])
    );
    return titlesArray;
};

// Do not edit below this line
module.exports = getTheTitles;
