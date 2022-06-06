// const calc = {
//   total: 1,
//   add: function (value) {
//     this.total += value;
//     return this;
//   },
//   multiply: function (value) {
//     this.total *= value;
//     return this;
//   },
//   subtract: function (value) {
//     this.total -= value;
//     return this;
//   },
// };

// const result = calc.add(10).multiply(4).subtract(10);
// console.log(result.total);

var x = 4;
obj = {
  x: 3,
  bar: function () {
    setTimeout(function () {
      console.log(this.x);
    }, 1000);
  },
};

obj.bar();
