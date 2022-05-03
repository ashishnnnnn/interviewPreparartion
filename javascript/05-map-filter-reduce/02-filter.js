const array = [3, 4, 5, 6, 7, 8, 9, 10];

const new_array = array.filter((ele, idx, array) => ele % 2 === 0);

console.log(new_array);
