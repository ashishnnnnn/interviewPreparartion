// function fib(num, memoize = []) {
//   if (memoize[num] !== undefined) {
//     return memoize[num];
//   } else {
//     if (num <= 2) {
//       return 1;
//     } else {
//       let result = fib(num - 1, memoize) + fib(num - 2, memoize);
//       memoize[num] = result;
//       return result;
//     }
//   }
// }

// console.time(10);
// console.log(fib(10));
// console.timeEnd(10);

// console.time(8);
// console.log(fib(8));
// console.timeEnd(8);

const display_array = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].join(" "));
  }
};

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const rotate_90_clock = (arr) => {
  console.log(arr[0].length);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < Math.floor(arr[i].length / 2); j++) {
      let temp = arr[i][j];
      arr[i][j] = arr[i][arr[i].length - 1 - j];
      arr[i][arr[i].length - 1 - j] = temp;
    }
  }
  display_array(arr);
};

display_array(arr);

rotate_90_clock(arr);
