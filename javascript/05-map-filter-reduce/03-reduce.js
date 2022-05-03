// Reduce reduces the array value into a single value, reduce will take two parameter one is the reducer function and other one is the initial value.

// If no value is provided as initial value , then first value of the array is considered as initial value.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = array.reduce((accum, curr) => (accum += curr), 0);

console.log(sum);
