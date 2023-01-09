const add = function(number1, number2) {
	let addition = number1 + number2;
  return addition;
};

const subtract = function(number1, number2) {
  let subtraction = number1 - number2;
  return subtraction;

};

const sum = function([...numbers]) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  };
  return sum;
};

const multiply = function() {


};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
