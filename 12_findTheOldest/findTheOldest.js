const findTheOldest = function(people) {
    let sortedAge = people.sort((a, b) => {
        if (!a.yearOfDeath) {
            a.yearOfDeath = (new Date()).getFullYear();
        };
        if (!b.yearOfDeath) {
            b.yearOfDeath = (new Date()).getFullYear();
        };
        a = a.yearOfDeath - a.yearOfBirth;
        b = b.yearOfDeath - b.yearOfBirth;
        return a > b ? -1 : 1;
    })
    return sortedAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
