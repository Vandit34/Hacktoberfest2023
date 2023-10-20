//The Fibonacci series is a sequence of numbers where each number is the sum of the two preceding ones, typically starting with 0 and 1. So, the sequence starts as follows:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

// Prompt the user for input
const numTerms = parseInt(prompt("Enter the number of Fibonacci terms:"));

// Initialization of variables for the first two terms
let a = 0;
let b = 1;

// Printing the first two terms
console.log(a);
console.log(b);

// Generating and printing the rest of the terms
for (let i = 2; i < numTerms; i++) {
  const nextTerm = a + b;
  console.log(nextTerm);
  a = b;
  b = nextTerm;
}
