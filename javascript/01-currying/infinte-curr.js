// const sum = (a, summ = 0) => {
//   if (a === undefined) {
//     return summ;
//   } else {
//     return (b) => {
//       return sum(b, (summ += a));
//     };
//   }
// };

const sum = (a) => {
  return (b) => {
    return b ? sum(a + b) : a;
  };
};

console.log(sum(2)(3)(4)());
