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

const multiply = function([...numbers]) {
  let product = 1;
  for (let number of numbers) {
    product *= number;
  };
  return product;

};

const power = function(number, power) {
	return number ** power;
};

const factorial = function(number) {
	let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  };
  return result;
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
