const add = function(first,second) {
	return first+second;
};

const subtract = function(first,second) {
	return first-second;
};

const sum = function(array) {
  let length = array.length;
	let sum = 0;
  for(var i =0; i < length;i++){
    sum = sum+array[i];
  }
  return sum;
};

const multiply = function(array) {
  let numbers = array;
  let product = 1;
  for(var i =0; i < numbers.length;i++){
    product = product*numbers[i];
  }
  return product;
};

const power = function(base, power) {
	return Math.pow(base, power)
};

const factorial = function fac(number) {
  if(number <=1)
    return 1;
    else
    return number*fac(number-1);
	
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
