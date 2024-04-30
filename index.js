// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/

const greet = (name) => {
  return `Hello, ${name}`;
};

console.log(greet("Ali"));

// Q2) Write a simple arrow function that takes two parameters and returns their sum.

const sum = (x, y) => {
  return x + y;
};

console.log(sum(3, 5));

// Q3) Write a simple arrow function that squares a number.

const square = (z) => {
  return z * z;
};

console.log(square(2));

// Q4) [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.

const arraySquare = (array) => {
  return array.map((array) => array * array);
};

console.log(arraySquare([2, 3, 4]));
