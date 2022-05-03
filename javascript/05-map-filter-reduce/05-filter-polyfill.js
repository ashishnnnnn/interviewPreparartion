Array.prototype.my_filter = function (cb) {
  let ret_array = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      ret_array.push(this[i]);
    }
  }
  return ret_array;
};

let array = [1, 2, 3, 4, 5, 6];

console.log(
  array.my_filter((ele, idx, arr) => {
    if (ele % 2 === 0) {
      return true;
    } else {
      return false;
    }
  })
);
