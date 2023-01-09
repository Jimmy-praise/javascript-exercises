const convertToCelsius = function(number) {
  let answer = (number - 32) * (5/9);
  let roundedAnswer = Math.round(answer * 10) / 10
  return roundedAnswer
};

const convertToFahrenheit = function(number) {
  let answer = (number * 1.8) + 32;
  let roundedAnswer = Math.round(answer * 10) / 10
  return roundedAnswer
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
