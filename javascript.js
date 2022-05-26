const calc = {
  total: 1,
  add: function (value) {
    this.total += value;
    return this;
  },
  multiply: function (value) {
    this.total *= value;
    return this;
  },
  subtract: function (value) {
    this.total -= value;
    return this;
  },
};

const result = calc.add(10).multiply(4).subtract(10);
console.log(result.total);
