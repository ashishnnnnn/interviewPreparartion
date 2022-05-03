Array.prototype.my_reduce = function (cb, intial_value) {
  let accumulator = intial_value;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

let array = [1, 2, 3, 4, 5];

console.log(array.my_reduce((accumulator, curr) => (accumulator += curr), 1));
